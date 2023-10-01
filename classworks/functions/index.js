const MAX_AGE = 150;
const MIN_AGE = 0;
const RETIRED_MALE_AGE = 63;
const RETIRED_FEMALE_AGE = 58;
const SEX_MALE = 'М';
const SEX_FEMALE = 'Ж';

const firstName = getUserInput('Enter your first name', keepWithoutChange, isNonEmptyString);
const lastName = getUserInput('Enter your last name', keepWithoutChange, isNonEmptyString);
const middleName = getUserInput('Enter your middle name', keepWithoutChange, isNonEmptyString);
const age = getUserInput('Enter your age', transformToNumber, isValidAge);
const sex = getUserInput('Enter your sex', transformToSex, isNonEmptyString);
const retiredAge = sex === SEX_MALE ? RETIRED_MALE_AGE : RETIRED_FEMALE_AGE;
const retired = age >= retiredAge;

alert(
    `ФИО: ${lastName} ${firstName} ${middleName}
Возраст: ${age}
Пол: ${sex}
На пенсии: ${retired ? 'Да' : 'Нет'}`
);


function keepWithoutChange(data) {
    return data;
}

function transformToNumber(data) {
    if (!data) {
        return NaN;
    }

    return Number(replaceSymbols(data, ',', '.'));
}

function transformToSex(data) {
    switch (data) {
        case 'м':
        case 'М':
        case 'M':
        case 'm':
            return SEX_MALE;
        case 'ж':
        case 'Ж':
        case 'f':
        case 'F':
            return SEX_FEMALE;
        default:
            return '';
    }
}

function isNonEmptyString(value) {
    return Boolean(value);
}

function isValidAge(inputAge) {
    return Number.isFinite(inputAge) && inputAge >= MIN_AGE && inputAge <= MAX_AGE;
}

function getUserInput(message, transformData, isValid) {
    let userInput = null;
    let isCancelled = false;

    do {
        const rawUserInput = prompt(message);

        isCancelled = rawUserInput === null;
        userInput = isCancelled ? null : transformData(rawUserInput);
    } while (isCancelled || !isValid(userInput));

    return userInput;
}

function replaceSymbols(inputString, targetSymbol, replacementSymbol) {
    let resultString = '';

    for (const char of inputString) {
        resultString += char === targetSymbol ? replacementSymbol : char;
    }

    return resultString;
}
