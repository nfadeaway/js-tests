export default function getHealthStatus(heroHealth) {
  if (heroHealth.health < 15) return 'critical';
  if (heroHealth.health >= 15 && heroHealth.health <= 50) return 'wounded';
  return 'healthy';
}

export function getHerosStats(herosHealthData) {
  herosHealthData.sort((a, b) => b.health - a.health);
  return herosHealthData;
}
