import { FormValidator } from './FormValidator';
import { ValidatorResult } from './ValidatorResult';
import './style.scss'; // можно удалить, если не нужны стили
import { maxAge, minAge, requiredNumber, requiredText } from './validators';

const questionnaireForm = document.forms.namedItem('questionnaire');

interface Questionnaire {
    firstName: string;
    surname: string;
    patronymic: string;
    age: number;
    sex: string;
}

const questionnaireValidator = new FormValidator<Questionnaire>({
    firstName: [
        requiredText,
    ],
    surname: [
        requiredText,
    ],
    patronymic: [
        requiredText,
    ],
    age: [
        requiredNumber,
        maxAge,
        minAge,
    ]
})

questionnaireForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(questionnaireForm);

    const questionnaire: Questionnaire = {
        firstName: String(formData.get('firstName')),
        surname: String(formData.get('surname')),
        patronymic: String(formData.get('patronymic')),
        age: parseInt(formData.get('age') as string),
        sex: String(formData.get('sex')),
    }

    const errors = questionnaireValidator.validate(questionnaire);

    const RETIRED_MALE = 63;
    const RETIRED_FEMALE = 58;
    const ageResult = questionnaire.age;


    let sexResult: string;

    if (questionnaire.sex === 'male') {
        sexResult = 'Муж'
    } else { sexResult = 'Жен' }


    let retired: string;

    if (sexResult === 'Муж' && ageResult >= RETIRED_MALE) {
        retired = 'Да'
    } else if (sexResult === 'Жен' && ageResult >= RETIRED_FEMALE) {
        retired = 'Да'
    } else {
        retired = 'Нет'
    }
    let result = document.createElement('div');
    result.innerText = `ФИО: ${questionnaire.surname} ${questionnaire.firstName} ${questionnaire.patronymic}
    Возраст: ${ageResult}
    Пол: ${sexResult}
    На пенсии: ${retired}`;

    const errorText = document.createElement('li');
    errorText.innerText = 'поле обязательное для заполения';
    const errorMinAge = document.createElement('li');
    errorMinAge.innerText = 'Значение ниже допустимого';
    const errorMaxAge = document.createElement('li');
    errorMaxAge.innerText = 'Значение выше допустимого';
   


    if (errors === null) {
        document.body.append(result)
    } else if (errors.firstName) {
        const firstNameElement = document.querySelectorAll('.data')[0] as HTMLElement;
        firstNameElement.append(errorText)
    } else if (errors.surname) {
        const surnameElement = document.querySelectorAll('.data')[1] as HTMLElement;
        surnameElement.append(errorText)
    } else if (errors.patronymic) {
        const patronymicElement = document.querySelectorAll('.data')[2] as HTMLElement;
        patronymicElement.append(errorText)
    } else if (errors.age) {
        const ageElement = document.querySelectorAll('.data')[3] as HTMLElement;
        if (errors.age['requiredNumber']) {
           ageElement.append(errorText)
        } else if (errors.age['minAge']) {
            ageElement.append(errorMinAge)
        } else if (errors.age['maxAge']) {
            ageElement.append(errorMaxAge)
        }
    }

    
}, {once: true} );