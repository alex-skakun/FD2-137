import "./style.scss";
import "./mixin.scss";
import "./variables.scss";

import { FormValidator } from "./FormValidator";
import { maxLength, nonEmptyArray, requiredText } from "./validators";

const SendForm = document.forms.namedItem("validateForm");

interface FormData {
  customerName: string;
  surname: string;
  middleName: string;
  age: string;
  gender: string;
}

const validateSendForm = new FormValidator<FormData>({
  customerName: [nonEmptyArray, requiredText, maxLength(100)],
  surname: [nonEmptyArray, requiredText, maxLength(100)],
  middleName: [nonEmptyArray, requiredText, maxLength(100)],
  age: [nonEmptyArray, maxLength(100)],
  gender:[requiredText],
});

SendForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(SendForm);
  const formPersonal: FormData = {
    customerName: String(formData.get("customerName")).trim(),
    surname: String(formData.get("surname")).trim(),
    middleName: String(formData.get("middleName")).trim(),
    age: String(formData.get("age")).trim(),
    gender: String(formData.get("gender")),
  };

  validateSendForm.validate(formPersonal);
});
