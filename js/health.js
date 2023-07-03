export default function showHealthBar(heroHealth) {
  if (heroHealth.health < 15) return 'critical';
  if (heroHealth.health >= 15 && heroHealth.health <= 50) return 'wounded';
  return 'healthy';
}
