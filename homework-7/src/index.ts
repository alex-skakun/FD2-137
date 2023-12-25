import './style.scss';
import { FormValidator } from "./FormValidator";
import { requiredText, minLength, maxLength, validNumber, minAllowedValue, minAllowedNumber, maxAllowedNumber } from "./validators";
import { errorMessage } from './errorMessage';

const anketaForm = document.forms.namedItem('Anketa');

interface Anketa {
    lastName: string;
    firstName: string;
    middleName: string;
    age: number;
    sex: string;
}

// конфигуратор ↓ ↓ ↓ 
const anketaValidator = new FormValidator<Anketa>({
    lastName: [
        requiredText,
        minLength(3),
        maxLength(100),
    ],
    firstName: [
        requiredText,
        minLength(3),
        maxLength(100),
    ],
    middleName: [
        requiredText,
        minLength(3),
        maxLength(100),
    ],
    age: [
        validNumber,
        minAllowedValue(5),
        maxAllowedNumber(100),
    ],
});

anketaForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const resultArea = document.getElementById('result');

    // обновляем поле вывода результата ↓ ↓ ↓  чтобы не повторялось 
    if (resultArea) {
        resultArea.innerHTML = '';
    }

    const formData = new FormData(anketaForm);
    //console.log(formData);
    // проверяем, является ли аргумент числом - принадлежит ли он к типу number
    let ageNumeric;
    let ageString = String(formData.get('age'));
    if (ageString.trim().length === 0 || isNaN(Number(ageString))) {
        ageNumeric = 0;
    } else {
        ageNumeric = Number(ageString);
    }

    const anketaFields: Anketa = {
        lastName: String(formData.get('lastName')),
        firstName: String(formData.get('firstName')),
        middleName: String(formData.get('middleName')),
        age: ageNumeric,
        sex: String(formData.get('sex')),
    };

    //console.log(anketaFields);

    const errors = anketaValidator.validate(anketaFields);

    if (errors) {
        console.log(errors); // выводим сообщение об ошибках
        for (const [key, value] of Object.entries(errors)) {
            let functionName = Object.keys(value)[0];
            let message = errorMessage[functionName];// получаем сообщение об ошибке по нашей функции-валидатору
            if (typeof value[functionName] !== 'boolean') {
                message = buildTemplateString(message, value[functionName]);
            }
            const validationErrorElement = anketaForm[key].parentNode.querySelector('.validation-error');
            validationErrorElement.append(message);
            validationErrorElement.classList.remove('hidden');
        }
    } else {
        const fullNameElement = document.createElement('div');
        fullNameElement.textContent = `ФИО: ${anketaFields.lastName} ${anketaFields.firstName} ${anketaFields.middleName}`;
        resultArea?.appendChild(fullNameElement);

        const ageElement = document.createElement('div');
        ageElement.textContent = `Возраст: ${anketaFields.age}`;
        resultArea?.appendChild(ageElement);

        const sexElement = document.createElement('div');
        sexElement.textContent = 'Пол: ' + (anketaFields.sex === 'man' ? 'Муж.' : 'Жен.');
        resultArea?.appendChild(sexElement);

        const retirementElement = document.createElement('div');
        let retirementStatus = 'нет';
        if ((anketaFields.sex === 'man' && anketaFields.age >= 63)
            || (anketaFields.sex === 'woman' && anketaFields.age >= 58)
        ) {
            retirementStatus = 'да';
        }
        retirementElement.textContent = `На пенсии: ${retirementStatus}`;
        resultArea?.appendChild(retirementElement);
    }
});

// очистка сообщения об ошибке при нажатии клавишей поля input, когда мы исправляем невалидное значение
anketaForm?.querySelectorAll('input[type="text"]').forEach((item) => {
    item.addEventListener('keyup', event => {
        let validationErrorEl = item?.parentNode?.querySelector('.validation-error');
        if (validationErrorEl) {
            validationErrorEl.textContent = '';
            validationErrorEl.classList.add('hidden');
        }
    });
});

function buildTemplateString(text: string, data: any): string {
    return text.replace(/\{\{(\w+)\}\}/g, (match: string, key: string) => {
        return Object.hasOwn(data, key) ? String(data[key]) : match;
    });
}
