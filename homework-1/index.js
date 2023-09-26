const MAX_AGE = 150;
const MIN_AGE = 0;
const RETIRED_MALE = 63;
const RETIRED_FEMALE = 58;

let firstName;
let lastName;
let middleName;
let age;
let sex;
let retired;

do {
    lastName = prompt('Ваша фамилия?',);
} while (!lastName);

do {
    firstName = prompt('Ваше имя?');
} while (!firstName);

do {
    middleName = prompt('Ваше отчество?');
} while (!middleName);

do {
    let ageVerification;
    do {
        ageVerification = prompt('Укажите Ваш возраст');
    } while (!ageVerification);

    age = Number(ageVerification);
} while (!isFinite(age) || age < MIN_AGE || age > MAX_AGE);

do {
    let sexVerification;
    do {
        sexVerification = prompt('Укажите Ваш пол ("м" или "ж")')
    } while (!sexVerification);
    sex = sexVerification.toUpperCase();
} while (sex != 'М' && sex != 'Ж');


if (sex === 'М' && age >= RETIRED_MALE) {
    retired = 'Да';
}
else if (sex === 'Ж' && age >= RETIRED_FEMALE) {
    retired = 'Да';
}
else { retired = 'Нет' };

const user = `ФИО: ${lastName} ${firstName} ${middleName}
Возраст: ${age}
Пол: ${sex}
На пенсии: ${retired}`;

alert(user);