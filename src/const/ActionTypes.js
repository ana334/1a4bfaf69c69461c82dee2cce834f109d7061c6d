export function get(name, type = '') {
  if (type !== '') {
    type = "_" + type;
  }
  return "LOAD_" + name + type;
}
