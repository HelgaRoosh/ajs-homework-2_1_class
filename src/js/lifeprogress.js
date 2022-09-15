class Character {
  constructor(name, health) {
    this.name = '';
    this.health = 0;
  }
}

const charWizard = new Character('маг', 90);

function lifeprogress(character) {
  let result = '';
  if (character.health > 50) {
    document.getElementById('life').className = 'lifeprogress_healthy';
    result = ('healthy');
  }
  if (character.health >= 15 && character.health <= 50) {
    document.getElementById('life').className = 'lifeprogress_ wounded';
    result = ('wounded');
  }
  if (character.health < 15) {
    document.getElementById('life').className = 'lifeprogress_critical';
    result = ('critical');
  }
  return result;
}

lifeprogress(charWizard);
