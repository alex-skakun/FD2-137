const mainEl = document.getElementById("main");
const spanCollection = mainEl
  ? Array.from(mainEl.querySelectorAll<HTMLElement>("[data-color]"))
  : [];

spanCollection.forEach((spanEl) => {
  const colorValue = spanEl.textContent;
  if (colorValue) {
    const painBg = () => {
      spanEl.style.setProperty("background-color", colorValue);

      setTimeout(() => {
        spanEl.style.removeProperty("background-color");
      }, 1_000);
    };
    spanEl.addEventListener("click", painBg);
    setTimeout(() => {
      spanEl.removeEventListener("click", painBg);
    }, 5_000);
  }
});
