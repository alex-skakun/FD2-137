let secondName;
let firstName;
let fathersName;
let age;
let sex;
let pension;
const MINAGE = 0;
const MAXAGE = 150;
const PENSIONMALE = 63;
const PENSIONFEMALE = 58;

do {
    secondName = prompt('Введите Вашу фамилию:');
} while (!secondName || !isNaN(secondName));

do {
    firstName = prompt('Введите Ваше имя:');
} while (!firstName || !isNaN(firstName));

do {
    fathersName = prompt('Введите Ваше отчество:');
} while (!fathersName || !isNaN(fathersName));

do {
    let userAgeInput;

    do {
        userAgeInput = prompt('Введите Ваш возраст:');
    } while (!userAgeInput);

    let normalizedAgeInput = '';

    for (const char of userAgeInput){
        if (char === ',') {
            normalizedAgeInput += '.';
        } else {
            normalizedAgeInput += char;
        }
    }

    age = Number(normalizedAgeInput);
} while (!isFinite(age) || age < MINAGE || age > MAXAGE);

do {
    sex = prompt('Укажите Ваш пол буквами "М" или "Ж"')
} while (!sex || (sex.toLowerCase() !== 'м' && sex.toLowerCase() !== 'ж'));

if (sex.toLowerCase() === 'м')  {
    if (age >= PENSIONMALE){
        pension = 'Да';
    } else {
        pension = 'Нет';
    }
} else {
    if (age >= PENSIONFEMALE) {
        pension = 'Да';
    }
    else {
        pension = 'Нет';
    }
}

alert (
    `ФИО: ${secondName} ${firstName} ${fathersName}
Возраст: ${age}
Пол: ${sex}
На пенсии: ${pension}`);