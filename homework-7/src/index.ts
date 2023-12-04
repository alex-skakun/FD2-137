import { FormValidateResult, formValidator } from './formValidator';
import { nonEmptyArray, requiredText, requiredAge } from './validators';

const userForm = document.forms.namedItem('user-form') as HTMLFormElement | null;

interface UserForm {
    customerName: string;
    customerSurname: string;
    customerFathersName: string;
    customerAge: number;
    sex: string;
}

const userFormValidator = new formValidator<UserForm>({
    customerName: [
        nonEmptyArray,
        requiredText,
    ],
    customerFathersName: [
        nonEmptyArray,
        requiredText,
    ],
    customerSurname: [
        nonEmptyArray,
        requiredText,
    ],
    customerAge: [
        requiredAge(0, 150)
    ],
    sex: [
        requiredText
    ],
});

userForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userForm as HTMLFormElement);

    const userFormData: UserForm = {
        customerName: String(formData.get('customerName')),
        customerSurname: String(formData.get('customerSurname')),
        customerFathersName: String(formData.get('customerFathersName')),
        customerAge: parseInt(String(formData.get('customerAge')), 10),
        sex: String(formData.get('sex')),
    };

    const errors = userFormValidator.validate(userFormData);

    handleFieldError('nameError', errors?.customerName);
    handleFieldError('surnameError', errors?.customerSurname);
    handleFieldError('fathersNameError', errors?.customerFathersName);
    handleFieldError('ageError', errors?.customerAge);
    handleFieldError('sexError', errors?.sex);

    console.log(errors);
});

function handleFieldError(fieldId: string, error: unknown) {
    const errorElement = document.getElementById(fieldId) as HTMLElement | null;
    if (errorElement) {
        errorElement.style.visibility = error ? 'visible' : 'hidden';
    }
}
