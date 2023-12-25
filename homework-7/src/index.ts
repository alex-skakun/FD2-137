import { formValidator } from './formValidators';
import './style.scss'; // можно удалить, если не нужны стили
import { requiredAge, requiredText } from './validators';
const MALERETIREMENTAGE = 63;
const FEMALERETIREMENTAGE = 58;

const userDataForm = document.forms.namedItem('userForm');

let isRetired = '';

export interface userForm {
    surname: string,
    firstname: string,
    fathername: string,
    age: number,
    sex: string
}

const userDataValidator = new formValidator<userForm>({
    surname: [
        requiredText
    ],

    firstname: [
        requiredText
    ],

    fathername: [
        requiredText,
    ],

    age: [
        requiredAge(0, 150)
    ],

    sex: [
        requiredText
    ]
}
);

userDataForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userDataForm);

    const userData: userForm = {
        surname: formData.get('surname') as string,
        firstname: formData.get('firstname') as string,
        fathername: formData.get('fathername') as string,
        age: Number(formData.get('age')),
        sex: formData.get('sex') as string,
    };

    const errors = userDataValidator.validate(userData);

    if ((userData.sex === 'Мужчина' && userData.age >= MALERETIREMENTAGE) || (userData.sex === 'Женщина' && userData.age >= FEMALERETIREMENTAGE)) { isRetired = 'Да'; }
    else { isRetired = 'Нет'; }

    let div_user_data = document.getElementById("user-form");

    if (div_user_data) {
        if (!errors) {
            div_user_data.innerHTML = `
            <div>
            <p>ФИО : ${userData.surname} ${userData.firstname} ${userData.fathername}</p>
            <p>Возраст : ${userData.age} </p>
            <p>Пол : ${userData.sex}</p>
            <p>На пенсии : ${isRetired}</p>
          </div>      
            `
        }
        else {
            div_user_data.innerHTML = '';
        }
    }

    console.log(errors);
    console.log(userData);
})