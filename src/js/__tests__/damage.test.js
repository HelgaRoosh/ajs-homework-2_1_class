import Bowerman from '../class_Bowerman';

test('damage', () => {
  const char = new Bowerman('char', 'Bowerman');
  char.damage(20);
  expect(char.health).toEqual(85);
});

test('damage in 0', () => {
  const char = new Bowerman('char', 'Bowerman');
  char.health = 0;
  char.damage(20);
  expect(char.health).toEqual(-15);
});
// не совсем ясно, как работает этот метод, по идее здоровье не может упасть ниже 0
// в самом методе damage должно быть предусмотрено, что при здоровье <=0 перс умирает
// и здоровье остается 0
// следующий метод написан по этой причине для 100% покрытия автотестами
test('damage in <0', () => {
  const char = new Bowerman('char', 'Bowerman');
  char.health = -10;
  char.damage(20);
  expect(char.health).toEqual(0);
});
