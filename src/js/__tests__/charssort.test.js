import charssort from '../charssort';

test.each([
  ['group1', [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ], [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]],
])(
  ('charssort for %s '),
  (group, array, expected) => {
    const result = charssort(array);
    expect(result).toEqual(expected);
  },
);
