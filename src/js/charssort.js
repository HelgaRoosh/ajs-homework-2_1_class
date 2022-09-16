const chars = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function charssort(characters) {
  const result = characters.sort((prev, next) => next.health - prev.health);
  return result;
}

charssort(chars);
