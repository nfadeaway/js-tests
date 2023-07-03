import getLevel from '../level';

import fetchData from '../http';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});
test('call getLevel once', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('return OK result', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 36 });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 36');
});

test('return Error result', () => {
  fetchData.mockReturnValue({});
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
