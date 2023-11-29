import './style.scss'; // можно удалить, если не нужны стили


import { FormValidator } from "./FormValidator";
import { maxLength,  requiredText, requiredAge, requiredGender } from "./validators";

const userDataForm = document.forms.namedItem('userData');

interface userData {
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
        requiredAge(0,150)        
    ],

    gender: [
        requiredGender        
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
        gender: formData.get('middleName') as string,               
    };

    const errors = userDataValidator.validate(userData);
    
    console.log(errors);
    console.log(userData);
})