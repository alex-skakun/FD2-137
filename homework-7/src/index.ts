import './style.scss'; // можно удалить, если не нужны стили


import { FormValidator } from "./FormValidator";
import { maxLength,  requiredText, requiredAge} from "./validators";

const userDataForm = document.forms.namedItem('userData');

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
        requiredAge(0,150)        
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

    //    for (const [key:string] in userData)
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

    if(!errors)
    {
        let lab_user_data = document.getElementById("user-data");

        if(lab_user_data){
            lab_user_data.innerHTML =  `<pre>
            ФИО : ${userData.lastName} ${userData.firstName} ${userData.middleName}
            Возраст : ${userData.age} 
            Пол : ${userData.gender}   </pre>         
            `
            
            lab_user_data.style.display = "block";
        }
    }
    
    
    console.log(errors);
    console.log(userData);
})