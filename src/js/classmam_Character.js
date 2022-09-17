export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    this.controlCondition();
  }

  controlCondition() {
    if (this.type !== 'Bowman'
    && this.type !== 'Swordsman'
    && this.type !== 'Magician'
    && this.type !== 'Daemon'
    && this.type !== 'Undead'
    && this.type !== 'Zombie') {
      throw new Error('Недопустипый тип игрока');
    }

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Недопустимая длинна имени игрока');
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
