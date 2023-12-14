export function isEmptyInputValue(value: unknown): boolean {
  switch (typeof value) {
    case 'string':
      return value.trim().length === 0;
    case 'number':
      return !Number.isFinite(value);
    case 'boolean':
      return false;
    default:
      return !value;
  }
}


function clean(el: HTMLElement | null) {
  while (el?.firstChild) {
    el.firstChild.remove();
  }
}
