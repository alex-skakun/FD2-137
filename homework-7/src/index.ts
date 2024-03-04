import "./style.scss";
import "./mixin.scss";
import "./variables.scss";

import { FormValidator } from "./FormValidator";
import { maxLength, nonEmptyArray, requiredText } from "./validators";

const validateForm = document.forms.namedItem("pizzaOrder");

// interface PizzaOrder {
//   pizzas: string[];
//   addons: string[];
//   paymentType: string;
//   customerName: string;
//   shippingAddress: string;
// }

// const pizzaOrderValidator = new FormValidator<PizzaOrder>({
//   pizzas: nonEmptyArray,
//   addons: nonEmptyArray,
//   paymentType: requiredText,
//   customerName: [requiredText, maxLength(100)],
//   shippingAddress: [requiredText, maxLength(200)],
// });

// validateForm?.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(validateForm);
//   const pizzaOrder: PizzaOrder = {
//     pizzas: formData.getAll("pizza") as string[],
//     addons: formData.getAll("addon") as string[],
//     paymentType: String(formData.get("paymentType")),
//     customerName: String(formData.get("customerName")).trim(),
//     shippingAddress: String(formData.get("shippingAddress")).trim(),
//   };

//   const errors = pizzaOrderValidator.validate(pizzaOrder);

//   console.log(errors);
// });
