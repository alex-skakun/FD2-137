const MAX_AGE = 150;
const MIN_AGE = 0;
const RETIRED_MALE = 65;
const RETIRED_FIMALE = 60;

let lastName;
let name;
let fathername;
let age;
let gender;
let retired;

do {
    lastName = prompt('Ваша фамилия');
} while (!lastName);

do {
    name = prompt('Ваше имя');
} while (!name);

do {
    fathername = prompt('Ваше отчество');
} while (!fathername);

do {
    const userInputAge = prompt('Ваш возраст');
    age = userInputAge ? Number(userInputAge) : NaN;
} while (!isFinite(age) || age <= MIN_AGE || age >= MAX_AGE);

do {
    gender = prompt('Вы мужчина или женщина? Введите М или Ж');
} while (!gender || (gender.toUpperCase() !== 'М' && gender.toUpperCase() !== 'Ж'));


if (gender === 'М') {
    if (age < RETIRED_MALE) {
        retired = 'нет';
    }
    else {
        retired = 'да';
    }
}
else if (age < RETIRED_FIMALE) {
    retired = 'нет';
}
else {
    retired = 'да';
};

alert (
`ФИО: ${lastName} ${name} ${fathername}
Возраст: ${age}
Пол: ${gender}
На пенсии: ${retired}`
);


