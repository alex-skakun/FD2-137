// import { COLORS } from "./colors";
// import { createElementByColor } from "./createElementByColor";

import { FormValidator } from './FormValidator';
import { maxLength, nonEmptyArray, requiredText } from './validators';

// const mainEl = document.getElementById('main');

// const coloredElements = COLORS.map((color) => createElementByColor(color));
// //плохой вариант
// // for (const coloredElement of coloredElements){
// //     mainEl?.appendChild(coloredElement);
// // }

// //получше
// // mainEl?.append(...coloredElements);
// // mainEl?.insertAdjacentElement('be')

// // отличный, дерево обновится 1 раз только.

// mainEl?.appendChild(COLORS.reduce ((fragment, color) => {
//     fragment.appendChild(createElementByColor(color));
//     return fragment;
// }, document.createDocumentFragment()));

// mainEl?.addEventListener('click', (event) => {
//     const targetEl = event.target as HTMLElement;
//     const coloredEl = targetEl.closest<HTMLElement>('[data-color]')

//     if (coloredEl) {
//         const colorValue = coloredEl.getAttribute('data-color');
//         coloredEl.style.setProperty('background-color', colorValue)
//     }

// })

// const spanColection = mainEl
//     // ? Array.from(mainEl.querySelectorAll('[data-color]') as NodeListOf<HTMLElement>)
//     ? Array.from(mainEl.querySelectorAll<HTMLElement>('[data-color]'))
//     : [];
// spanColection.forEach((spanEl) => {
//     const colorValue = spanEl.textContent;

//     function paintBG() {
//         if (colorValue) {
//             spanEl.style.backgroundColor = colorValue;
//         }
//     }
//     spanEl.addEventListener('click', paintBG);
// });

// const bold = mainEl?.querySelector('#b');
// bold?.addEventListener('click', () => bold.classList.add('bold'))
//=================================================================================

const pizzaOrderForm = document.forms.namedItem('pizzaOrder');

interface PizzaOrder {
  pizzas: string[];
  addons: string[];
  paymentType: string;
  customerName: string;
  shippingAdress: string;
}

const pizzaOrderValidator = new FormValidator<PizzaOrder>({
  pizzas: [nonEmptyArray],
  paymentType: [requiredText],
  customerName: [requiredText, maxLength(100)],
  shippingAdress: [requiredText, maxLength(200)],
});

pizzaOrderForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(pizzaOrderForm);
  const pizzaOrder: PizzaOrder = {
    pizzas: formData.getAll('pizza') as string[],
    addons: formData.getAll('addon') as string[],
    paymentType: String(formData.get('paymentType')),
    customerName: (formData.get('customerName') as string).trim(),
    shippingAdress: String(formData.get('shippingAdress')).trim(),
  };
  const errors = pizzaOrderValidator.validate(pizzaOrder);

  console.log(errors);
});
