// import { COLORS } from "./colors";
// import { createElementByColor } from "./createElementByColor";

import { errors } from "undici-types";
import { FormValidator } from "./FormValidator";
import { maxLength, nonEmptyArray, requiredText } from "./Validators";

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

interface PizzaOrder {
  pizzas: string[];
  addons: string[];
  paymentType: string;
  customerName: string;
  shippingAddres: string;
}

const pizzaOrderValidator = new FormValidator<PizzaOrder>({
  pizzas: [nonEmptyArray],
  paymentType: [requiredText],
  customerName: [requiredText, maxLength(100)],
  shippingAddres: [requiredText, maxLength(200)],
});

pizzaOrderForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(pizzaOrderForm);
  const pizzaOrder: PizzaOrder = {
    pizzas: formData.getAll("pizza") as string[],
    addons: formData.getAll("addon") as string[],
    paymentType: String(formData.get("paymentType")),
    customerName: (formData.get("customerName") as string).trim(),
    shippingAddres: (formData.get("shippingAddres") as string).trim(),
  };

  const errors = pizzaOrderValidator.validate(pizzaOrder);

  console.log(errors);
});
