import './style.scss';
import { FormValidator } from './FormValidator';
import { UserData } from './UserData';
import { exactValues, max, maxLength, min, requiredText } from './validators';
import { UserGender } from './UserGender';
import { ValidatorResult } from './ValidatorResult'; // можно удалить, если не нужны стили

const form = document.forms.namedItem('personForm');

const userDataValidator = new FormValidator<UserData>({
  lastName: [
    requiredText,
    maxLength(100),
  ],
  firstName: [
    requiredText,
    maxLength(100),
  ],
  middleName: [
    requiredText,
    maxLength(100),
  ],
  age: [
    requiredText,
    min(0),
    max(150),
  ],
  sex: [
    requiredText,
    exactValues([UserGender.MALE, UserGender.FEMALE]),
  ],
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const age = formData.get('age') ? Number(formData.get('age')) : NaN;
  const userData: UserData = {
    lastName: String(formData.get('lastName')).trim(),
    firstName: String(formData.get('firstName')).trim(),
    middleName: String(formData.get('middleName')).trim(),
    age,
    sex: formData.get('sex') as UserGender,
  };

  const errors = userDataValidator.validate(userData);

  for (const errorMessage of form.querySelectorAll('.error-message')) {
    errorMessage.remove();
  }

  if (errors) {
    for (const [fieldName, fieldErrors] of Object.entries(errors)) {
      const formElement = form.elements.namedItem(fieldName);

      if (formElement instanceof HTMLElement) {
        formElement.parentElement?.append(createErrorByValidity(fieldErrors));
      } else if (formElement instanceof RadioNodeList) {
        const radioInput = formElement.item(0) as HTMLElement | null;
        const parent = radioInput?.closest('.input-wrapper');

        parent?.append(createErrorByValidity(fieldErrors));
      }
    }
  } else {
    form.querySelector('.results')?.remove();
    form.insertAdjacentHTML('afterend', `
      <div class="results">
        <div class="result-row">
          <span>ФИО:</span>
          <span>${[userData.lastName, userData.firstName, userData.middleName].join(' ')}</span>
        </div>
        <div class="result-row">
          <span>Возраст:</span>
          <span>${userData.age}</span>
        </div>
        <div class="result-row">
          <span>Пол:</span>
          <span>${userData.sex === UserGender.MALE ? 'Муж.' : 'Жен.'}</span>
        </div>
        <div class="result-row">
          <span>На пенсии:</span>
          <span>ДА</span>
        </div>
      </div>
    `);
  }

  /* const elements = [...form.elements];
  const valid = elements.every((formElement) => {
    if (formElement instanceof HTMLInputElement) {
      formElement.parentElement?.querySelector('.error-message')?.remove();
      if (!formElement.validity.valid) {
        formElement.parentElement?.insertAdjacentElement('beforeend', createErrorByValidity(formElement.validity));
      }
    }

     return true;
  });

  if (valid) {
    const data = new FormData(form);

    form.insertAdjacentHTML('afterend', `
      <div class="results">
        <div class="result-row">
          <span>ФИО:</span>
          <span>${[data.get('lastName'), data.get('firstName'), data.get('middleName')].join(' ')}</span>
        </div>
        <div class="result-row">
          <span>Возраст:</span>
          <span>${data.get('age')}</span>
        </div>
        <div class="result-row">
          <span>Пол:</span>
          <span>${data.get('sex') === 'm' ? 'Муж.' : 'Жен.'}</span>
        </div>
        <div class="result-row">
          <span>На пенсии:</span>
          <span>Да</span>
        </div>
      </div>
    `);
  } */
});

const validityKeys: (keyof ValidityStateFlags)[] = [
  'valueMissing',
  'typeMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooShort',
  'tooLong',
  'patternMismatch',
  'badInput',
  'customError',
];

function createErrorByValidity(erorrs: NonNullable<ValidatorResult>): HTMLUListElement {
  const errorElement = document.createElement('ul');

  errorElement.classList.add('error-message');

  for (const validityKey of Object.keys(erorrs)) {
    errorElement.insertAdjacentHTML('beforeend', `<li>${getMessageByKey(validityKey)}</li>`)
  }

  return  errorElement;
}

function getMessageByKey(key: string): string {
  switch (key) {
    case 'requiredText':
      return 'поле обязательно для заполнения';
    case 'max':
      return 'Значение превышает допустимое';
    case  'min':
      return 'Значение ниже допустимого';
    case 'maxLength':
      return 'Значение не соответствует максимальной длине';
    case 'exactValues':
      return 'Некорректное значение';
    default:
      return 'Ошибка';
  }
}
