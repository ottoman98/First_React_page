export function currencies(object) {
  const current = object.currencies;
  const keys = Object.keys(current);
  const array = [];

  keys.map((p) => {
    array.push(current[p].name);
  });
  return array.join(',');
}
