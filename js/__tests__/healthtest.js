import getHealthStatus, { getHerosStats } from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Воин', health: 10 }, 'critical'],
  [{ name: 'Лучник', health: 40 }, 'wounded'],
])('testing healthbar stat function with %o', (heroParams, expected) => {
  const result = getHealthStatus(heroParams);
  expect(result).toBe(expected);
});

test('sorted heros stats', () => {
  const healthData = [
    { name: 'Маг', health: 90 },
    { name: 'Воин', health: 10 },
    { name: 'Лучник', health: 40 },
  ];

  const sortedHealthData = [
    { name: 'Маг', health: 90 },
    { name: 'Лучник', health: 40 },
    { name: 'Воин', health: 10 },
  ];

  const result = getHerosStats(healthData);
  expect(result).toEqual(sortedHealthData);
});
