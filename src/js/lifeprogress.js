// class Character {
// constructor(name, health) {
// this.name = '';
// this.health = 0;
// }
// }

const CharWizard = {
  name: 'маг',
  health: 90,
};

export default function lifeprogress(health) {
  let result = '';
  if (health > 50) {
    // document.getElementById('life').className = 'lifeprogress_healthy';
    result = 'healthy';
  }
  if ((health >= 15) && (health <= 50)) {
    // document.getElementById('life').className = 'lifeprogress_ wounded';
    result = 'wounded';
  }
  if (health < 15) {
    // document.getElementById('life').className = 'lifeprogress_critical';
    result = 'critical';
  }
  return result;
}

lifeprogress(CharWizard.health);
