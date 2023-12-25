let inputName,  inputSurName, inputMiddleName, inputAge, inputAgeStr, inputSex, isPension, isMan;
const MIN_AGE_VALUE = 0, MAX_AGE_VALUE = 150, SEX_M_L_VALUE = 'м', SEX_M_T_VALUE = 'М', SEX_F_L_VALUE = 'ж', SEX_F_T_VALUE = 'Ж',  PENSION_STAGE_M_VALUE = 65, PENSION_STAGE_F_VALUE = 60;
//get surName
validString = false;
do {
    //в рамках изученного 
    inputSurName = prompt(`введите фамилию`); 
    if(Boolean(inputSurName)){
        validString = true;
        for (let i = 0; i < inputSurName.length; i++){
            const LETTER_VALUE = inputSurName[i];
            if (!(LETTER_VALUE >= 'a' && LETTER_VALUE <= 'z') 
                    && !(LETTER_VALUE >= 'а' && LETTER_VALUE <= 'я') 
                        && !(LETTER_VALUE >= 'A' && LETTER_VALUE <= 'Z') 
                            && !(LETTER_VALUE >= 'А' && LETTER_VALUE <= 'Я')
                                && LETTER_VALUE !== 'ё' && LETTER_VALUE !== 'Ё' && LETTER_VALUE !== '-') {
                validString = false;
                break;//вообще как бы не изучали, но можно не использовать и код будет работать так же, только немного дольше
            }
        }
    }
} while (!validString)

//get Name
validString = false;
do {
    //в рамках изученного 
    inputName = prompt(`введите имя`); 
    if(Boolean(inputName)){
        validString = true;
        for (let i = 0; i < inputName.length; i++){
            const LETTER_VALUE = inputName[i];
            if (!(LETTER_VALUE >= 'a' && LETTER_VALUE <= 'z') 
                    && !(LETTER_VALUE >= 'а' && LETTER_VALUE <= 'я') 
                        && !(LETTER_VALUE >= 'A' && LETTER_VALUE <= 'Z')
                            && !(LETTER_VALUE >= 'А' && LETTER_VALUE <= 'Я')
                                && LETTER_VALUE !== 'ё' && LETTER_VALUE !== 'Ё' && LETTER_VALUE !== '-') {
                validString = false;
                break;//вообще как бы не изучали, но можно не использовать и код будет работать так же, только немного дольше
            } 
        }
    }
} while (!validString) 

//get MiddleName
validString = false;
do {
    //в рамках изученного 
    inputMiddleName = prompt(`введите отчество`); 
    if(Boolean(inputMiddleName)){
        validString = true;
        for (let i = 0; i < inputMiddleName.length; i++){
            const LETTER_VALUE = inputMiddleName[i];
            if (!(LETTER_VALUE >= 'a' && LETTER_VALUE <= 'z') 
                    && !(LETTER_VALUE >= 'а' && LETTER_VALUE <= 'я') 
                        && !(LETTER_VALUE >= 'A' && LETTER_VALUE <= 'Z') 
                            && !(LETTER_VALUE >= 'А' && LETTER_VALUE <= 'Я')
                                && LETTER_VALUE !== 'ё' && LETTER_VALUE !== 'Ё' && LETTER_VALUE !== '-') {
                validString = false;
                break;//вообще как бы не изучали, но можно не использовать и код будет работать так же, только немного дольше
            }
        }
    }
} while (!validString)

//get age
do {
    //в рамках изученного 
    inputAgeStr = prompt(`введите возраст`);
    inputAge  = inputAgeStr === null ? NaN : Number(inputAgeStr.replace(/,/g, '.'));  
} while (inputAgeStr !== '0' && !inputAge || inputAge < MIN_AGE_VALUE || inputAge > MAX_AGE_VALUE)

//get sex
do {
    //в рамках изученного 
    inputSex = prompt(`введите пол`);
} while (inputSex !== SEX_M_L_VALUE && inputSex !== SEX_M_T_VALUE && inputSex !== SEX_F_L_VALUE  && inputSex !==  SEX_F_T_VALUE)

if(inputSex === 'М' || inputSex === 'м'){
    isMan = true;
    isPension = inputAge >= PENSION_STAGE_M_VALUE;
}
else{
    isMan = false;
    isPension = inputAge >= PENSION_STAGE_F_VALUE;  
}

//scrin message
alert(`ФИО: ${inputSurName} ${inputName} ${inputMiddleName} 
Возраст: ${inputAge} 
Пол: ${isMan ? 'М' : 'Ж'}
На пенсии: ${isPension ? 'Да' : 'Нет'}`);