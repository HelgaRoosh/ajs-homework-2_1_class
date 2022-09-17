export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    this.controlCondition();
  }

  controlCondition() {
    if (this.type !== 'Bowerman'
    && this.type !== 'Swordsman'
    && this.type !== 'Magician'
    && this.type !== 'Daemon'
    && this.type !== 'Undead'
    && this.type !== 'Zombie') {
      throw new Error('Недопустимый тип игрока');
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
      return this;
    }
    throw new Error('Нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
      // не совсем ясно, как работает этот метод, по идее здоровье не может упасть ниже 0
      // в самом методе damage должно быть предусмотрено, что при здоровье <=0 перс умирает
      // и здоровье остается 0
      // строки 41-42 написаны по этой причине для 100% покрытия автотестами
    }
  }
}
