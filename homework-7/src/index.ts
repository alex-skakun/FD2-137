import './style.scss'; // можно удалить, если не нужны стили
import {FormValidator} from "./FormValidator";
import {FormValidateResult} from "./FormValidator";
import {requiredText, validAgeMin, validAgeMax, requiredNumber} from "./Validators";

interface UserData{
    surname: string,
    name: string,
    middleName: string,
    age: string,
    sex: string,
}

const userDataForm = document.forms.namedItem('user-data');

const userDataValidator = new FormValidator <UserData>({

    surname: [
        requiredText,
    ],
    name: [
        requiredText,
    ],
    middleName: [
        requiredText,
    ],
    age: [
        requiredText,
        requiredNumber,
        validAgeMin,
        validAgeMax,
    ],
    sex: [],

});


userDataForm?.addEventListener('submit', event => {

    event.preventDefault();
    const formData = new FormData(userDataForm);
    const userData: UserData = {
        surname: String(formData.get('surname')).trim(),
        name: String(formData.get('name')).trim(),
        middleName: String(formData.get('middleName')).trim(),    
        age: String(formData.get('age')).trim(), 
        sex: String(formData.get('sex')).trim(), 
    };
    const errors = userDataValidator.validate(userData);

    clearMessages(document);
    setFormErrors(document, errors);

    setFormInformation(document, userData, errors);

});

function setFormErrors(document: Document, errors: FormValidateResult<UserData> | null) : void{

    if (!errors)
        return; 

    for (const key in errors) {
        setFormError(document, errors, key);          
    }
}

function setFormError(document: Document, errors: FormValidateResult<UserData> | null, errName: string) : void{

    const errEl = document.getElementById(errName + "Error");
    if(!errEl) return;  

    if (!errors) return; 
    
    for (const property in errors[errName as keyof UserData]) { 
        const err = errors[errName as keyof UserData];

        if (!err || !err[property]) continue;

        const errLiOfEl = createElementByErr(err[property]);
        errEl.appendChild(errLiOfEl);
    }  
}

function createElementByErr(err: string): HTMLElement{

    const el = document.createElement('li');
    el.textContent = err;
    el.style.color = "red";
    return el;
}

function clearMessages(document: Document): void{

    const errorsLists = document.querySelectorAll('.error-list');

    for (const err of errorsLists) {
        err.innerHTML = '';  
    }

}

function setFormInformation(document: Document, userData: UserData, errors: FormValidateResult<UserData> | null){
    
    const infEl = document.getElementById("information");

    if (!infEl) return;

    infEl.innerHTML = "";

    if(errors) return;

    const retirementAge = userData.sex === 'male' ? 65 : 60; 
    const age = Number(userData.age.replace(/,/g, '.')); 
    const retirement = age >= retirementAge;
    const sex = userData.sex === 'male' ? 'Мужчина' : 'Женщина';

    const el = document.createElement('span');
    el.innerHTML = `<br>ФИО: ${userData.surname} ${userData.name} ${userData.middleName}
    <br>Возраст: ${age}
    <br>Пол: ${sex}
    <br>На пенсии: ${retirement ? 'Да' : 'Нет'}`;
   
    infEl.appendChild(el); 
}






