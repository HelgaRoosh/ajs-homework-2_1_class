import Character from '../classmam_Character';

test.each([
  ['x'],
  ['123456789xx'],
])(
  ('class calculate for %s'),
  (charName) => {
    const result = () => new Character(charName, 'Bowerman');
    expect(result).toThrowError(new Error('Недопустимая длинна имени игрока'));
  },
);

test('errorType', () => {
  const char = () => new Character('char', 'notype');
  expect(char).toThrow(new Error('Недопустимый тип игрока'));
});
