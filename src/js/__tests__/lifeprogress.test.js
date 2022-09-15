import lifeprogress from '../lifeprogress';

test.each([
  ['маг', 90, 'healthy'],
  ['мечник', 10, 'critical'],
  ['лучник', 50, 'wounded'],
  ['рыцарь', 45, 'wounded'],
  ['гремлин', 15, 'wounded'],
  ['неведомаяДичь', -25, 'critical'],
])(
  ('lifeprogress calculate for %s with %i health'),
  (charName, charHealth, expected) => {
    const result = lifeprogress(charHealth);
    expect(result).toMatch(expected);
  },
);
