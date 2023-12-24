import './style.scss'; // можно удалить, если не нужны стили


import { FormValidator } from "./FormValidator";
import { maxLength, requiredText, requiredAge } from "./validators";
const M_RETIRED = 63;
const F_RETIRED = 58;

const userDataForm = document.forms.namedItem('userData');
let isRetired = '';

export interface userData {
    lastName: string,
    firstName: string,
    middleName: string,
    age: number,
    gender: string
}

const userDataValidator = new FormValidator<userData>({
    lastName: [
        requiredText
    ],

    firstName: [
        requiredText
    ],

    middleName: [
        requiredText,
    ],

    age: [
        requiredAge(0, 150)
    ],

    gender: [
        requiredText
    ]
}

);

userDataForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userDataForm);

    const userData: userData = {
        lastName: formData.get('lastName') as string,
        firstName: formData.get('firstName') as string,
        middleName: formData.get('middleName') as string,

        age: Number(formData.get('age')),
        gender: formData.get('gender') as string,
    };

    const errors = userDataValidator.validate(userData);

    //    for (const key in userData)
    // {
    //     let lab = document.getElementById(`error-${key}`);
    //     debugger;

    //     if(errors)
    //     {
    //       if(errors[key])
    //       {

    //       }

    //     }
    //     else{
    //         lab?.style.display = 'none';
    //     }
    // }


    if ((userData.gender === 'Мужчина' && userData.age >= M_RETIRED) || (userData.gender === 'Женщина' && userData.age >= F_RETIRED))
     { isRetired = 'Да';}
    else  
     { isRetired = 'Нет';}

    let div_user_data = document.getElementById("user-data");

    if (div_user_data) {
        if (!errors) {
            div_user_data.innerHTML = `
            <div>
            <p> ФИО : ${userData.lastName} ${userData.firstName} ${userData.middleName}</p>
            <p>Возраст : ${userData.age} </p>
            <p>Пол : ${userData.gender}</p>
            <p>На пенсии : ${isRetired}</p>
          </div>      
            `
        }
        else
        {
            div_user_data.innerHTML = '';
        }
    }
   
    console.log(errors);
    console.log(userData);
})