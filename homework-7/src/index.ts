import './style.scss'; // можно удалить, если не нужны стили

import { FormValidator } from "./FormValidator";
import { maxLength, nonEmptyArray, requiredText, requiredAge } from "./validstors";


const MAX_AGE = 150;
const MIN_AGE = 0;
const RETIRED_MALE = 65;
const RETIRED_FIMALE = 60;
let retired:unknown;

const anketa = document.forms.namedItem('anketa');


interface anketaInterface {
    name: string,
    surName: string,
    fatherName: string,
    age: number,
    gender: string
}

const anketaValidator = new FormValidator<anketaInterface>({
    name: [
        requiredText,
    ],
    surName:[
        requiredText,
    ],
    fatherName: [
        requiredText,
    ],
    age: [
        requiredAge(MAX_AGE, MIN_AGE),
    ],
    gender: [
        requiredText,

    ],

});

anketa?.addEventListener('submit', (event) => {
    event.preventDefault();
    const span = document.querySelectorAll('span');

    for (const elem of span) {
        elem.remove();
    }

    const anketaData = new FormData(anketa);
    const anketaResult: anketaInterface = {
        name: anketaData.get('name') as string,
        surName: anketaData.get('surName')as string,
        fatherName: anketaData.get('fatherName')as string,
        age: Number(anketaData.get('age')),
        gender: anketaData.get('gender')as string,
    };
    const errors = anketaValidator.validate(anketaResult);
    console.log(errors);
    
    if (anketaResult.gender === 'Мужчина') {
        if (anketaResult.age < RETIRED_MALE) {
            retired = 'нет';
        }
        else {
            retired = 'да';
        }
    }
    else if (anketaResult.age < RETIRED_FIMALE) {
        retired = 'нет';
    }
    else {
        retired = 'да';
    };

    let output = document.querySelector('.output');

    if (output) {
        if (!errors) {
        output.innerHTML = `
        <p>ФИО:${anketaResult.surName} ${anketaResult.name} ${anketaResult.fatherName} </p>
        <p>Возраст:${anketaResult.age}</p>
        <p>Пол:${anketaResult.gender}</p>
        <p>На пенсии:${retired}</p>`;
    } else {
        for (const err of Object.keys(errors)) {
            let span = document.createElement("span");
            if (err === "age") {
                    span.textContent = '*введите значение от 0 до 150';
                    document.getElementById(err)?.after(span);
                }
            
            else {
                span.textContent = '*поле обязательно для заполнения ';
                document.getElementById(err)?.after(span);
            }

        }
    }
    }

    
});