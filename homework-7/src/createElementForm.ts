export function createElementForm(color: string): HTMLElement {
  const el = document.createElement("div");

  el.setAttribute("data-readyForm", color);
  el.textContent = color;

  return el;
}
