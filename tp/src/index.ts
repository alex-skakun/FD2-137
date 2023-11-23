// import { COLORS } from "./colors";
// import { createElementByColor } from "./createElementByColor";

// const mainEl = document.getElementById("main");
// // const spanCollection = mainEl
// //   ? Array.from(mainEl.querySelectorAll<HTMLElement>("[data-color]"))
// //   : [];

// // spanCollection.forEach((spanEl) => {
// //   const colorValue = spanEl.textContent;
// //   if (colorValue) {
// //     const painBg = () => {
// //       spanEl.style.setProperty("background-color", colorValue);
// //     };
// //     spanEl.addEventListener("click", painBg);
// //   }
// // });

// const fragment = document.createDocumentFragment();

// COLORS.forEach((color) => {
//   fragment.appendChild(createElementByColor(color));
// });

// mainEl?.appendChild(fragment);

// const coloredElements = COLORS.map((color) => {
//   createElementByColor(color);
// });

// // for (const coloredElement of coloredElements){
// // mainEl?.appendChild(coloredElement);
// // }

// // mainEl?.append(...coloredElements);
// // mainEl?.insertAdjacentElement('beforebegin');

// mainEl?.addEventListener("click", (event) => {
//   const targetEl = event.target as HTMLElement;
//   const coloredEl = targetEl.closest<HTMLElement>("data-color");

//   if (coloredEl) {
//     const colorValue = coloredEl.getAttribute("data-color");

//     coloredEl.style.setProperty("background-color", colorValue);
//   }
// });

const pizzaOrderForm = document.forms.namedItem("pizzaOrder");

pizzaOrderForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(pizzaOrderForm);
  const pizzaOrder = {
    pizzas: formData.getAll("pizza"),
    addons: formData.getAll("addon"),
    paymentType: formData.get("paymentType"),
    customerName: (formData.get("customerName") as string).trim(),
    shippingAddres: (formData.get("shippingAddres") as string).trim(),
  };

  console.log(pizzaOrder);
});
