// import './style.scss'; // можно удалить, если не нужны стили
import { FormValidateResult, formValidator } from './formValidator';
import { nonEmptyArray, requiredText, validAge } from './validators';

const userForm = document.forms.namedItem('user-form');

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
    ],
    customerFathersName: [
        requiredText,
    ],
    customerSurname: [
        requiredText,
    ],
    customerAge: [
        validAge,
    ],
    sex: [
        requiredText,
    ],
});

userForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userForm);

    const userFormData: UserForm = {
        customerName: String(formData.get('customerName')),
        customerSurname: String(formData.get('customerSurname')),
        customerFathersName: String(formData.get('customerFathersName')),
        customerAge: parseInt(String(formData.get('customerAge')), 10),
        sex: String(formData.get('sex')),
    };

    const errors: FormValidateResult<UserForm> | null = userFormValidator.validate(userFormData);

    const nameError = document.getElementById('nameError') as HTMLParagraphElement | null;
    if (nameError) {
        nameError.style.visibility = errors?.customerName ? 'visible' : 'hidden';
    }

    const surnameError = document.getElementById('surnameError') as HTMLParagraphElement | null;
    if (surnameError) {
        surnameError.style.visibility = errors?.customerSurname ? 'visible' : 'hidden';
    }

    const fathersNameError = document.getElementById('fathersNameError') as HTMLParagraphElement | null;
    if (fathersNameError) {
        fathersNameError.style.visibility = errors?.customerFathersName ? 'visible' : 'hidden';
    }

    const ageError = document.getElementById('ageError') as HTMLParagraphElement | null;
    if (ageError) {
        ageError.style.visibility = errors?.customerAge ? 'visible' : 'hidden';
    }

    const sexError = document.getElementById('sexError') as HTMLParagraphElement | null;
    if (sexError) {
        sexError.style.visibility = errors?.sex ? 'visible' : 'hidden';
    }

    console.log(errors);
});