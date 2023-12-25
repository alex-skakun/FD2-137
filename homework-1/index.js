const maxAge = 150, 
      minAge = 0;
 
let firstName,
    middleName,
    lastName,
    age,
    gender;

do {
    firstName = prompt('Введите вашу фамилию:');
    if (typeof firstName === 'string') {
        firstName = firstName.trim(); // remove empty spaces before and after inputtext
    } else {
        firstName = null;
    }
} while (Boolean(firstName) === false); 

do {
    middleName = prompt('Введите ваше имя:');
    if (typeof middleName === 'string') {
        middleName = middleName.trim(); // remove empty spaces before and after inputtext
    } else {
        middleName = null;
    }
} while (Boolean(middleName) === false); 

do {
    lastName = prompt ('Введите ваше отчество:'); 
    if (typeof lastName === 'string') {
        lastName = lastName.trim();   // remove empty spaces before and after inputtext
    } else {
        lastName = null;
    }
} while (Boolean(lastName) === false);

do {
    const userInput = prompt ('Введите ваш возраст:');   // string || null
    //age = userInput ? Number (userInput) : NaN;
    if (userInput !== undefined || userInput !== null || userInput !== false) {
        let normalizedUserInput = ''; // a line where all commas are replaced with dots
        for (const char of userInput) {
            if (char === ',') {
                normalizedUserInput +='.';
            } else {
                normalizedUserInput += char;
            }
        }
        age = new Number(normalizedUserInput);
    } else {
        age = NaN;
    }
} while (isNaN(age) || age > maxAge || age < minAge);
 
do {
    gender = prompt('Введите ваш пол: "M" или "Ж":');   // string || null
    if (typeof gender === 'string') {
        gender = gender.toUpperCase(); // to avoid confusing between Lowercase and Uppercase chars   
    } else {
        gender = null;
    }
} while (gender === null || (gender !== 'М' && gender !== 'Ж'));
 

let retirementStatus;

if (gender == 'M' && age >= 63) {
    retirementStatus = 'Да';
} else if (gender == 'Ж' && age >= 58) {
    retirementStatus = 'Да'; 
} else {
    retirementStatus = 'Нет';
}

let message = 'Ваше ФИО : ' + firstName + ' ' + middleName + ' ' + lastName + '\n';
    message += 'Ваш возраст : ' + age + '\n';
    message += 'Ваш пол : ' + gender + '\n';
    message += 'На пенсии : ' + retirementStatus + '\n';

alert(message);
