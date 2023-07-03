import showHealthBar from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Воин', health: 10 }, 'critical'],
  [{ name: 'Лучник', health: 40 }, 'wounded'],
])('tesing healthbar function with %o', (heroParams, expected) => {
  const result = showHealthBar(heroParams);
  expect(result).toBe(expected);
});
