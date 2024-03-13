const RETIRED_Y = "yes";
const RETIRED_N = "no";
const RETIRED_MALE_AGE = 63;
const RETIRED_FEMALE_AGE = 58;

export function createElementForm(...data: string[]): HTMLElement | null {
  const element = document.createElement("div");
  element.className = "wrapperWithData";

  const wrapper = document.getElementById("form");
  wrapper?.appendChild(element);

  const fragment = document.createDocumentFragment();

  data.forEach((el: string, i) => {
    const li = document.createElement("li");
    li.innerHTML = el;
    fragment.appendChild(li);

    if (i === 0) {
      li.insertAdjacentHTML("afterbegin", "<span>ФИО:</span>");
    }
    if (i === 3) {
      li.insertAdjacentHTML("afterbegin", "<span>Возраст:</span>");
    }
    if (i === 4) {
      li.insertAdjacentHTML("afterbegin", "<span>Пол:</span>");
    }
    if (i === 5) {
      const ageCurrent = Number(data[3]);
      (data[4] === "women" && ageCurrent >= RETIRED_FEMALE_AGE) ||
      (data[4] === "man" && ageCurrent >= RETIRED_MALE_AGE)
        ? (li.innerHTML = RETIRED_Y)
        : (li.innerHTML = RETIRED_N);
      li.insertAdjacentHTML("afterbegin", "<span>На пенсии:</span>");
    }
  });

  element.appendChild(fragment);

  return element;
}
