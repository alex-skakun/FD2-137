const MIN_AGE = 0;
const MAX_AGE = 150;
const PENSION_AGE_M = 63;
const PENSION_AGE_W = 58;

let lastName;
let firstName;
let midleName;
let age;
let sex;
let pension;

do {
  const userInputAge = prompt('Введите ваш возраст');
  age = userInputAge ? Number(userInputAge) : NaN;
} while (!isFinite(age) || age < MIN_AGE || age > MAX_AGE);

do {
  const userInputSex = prompt('Введите ваш пол, используйте буквы M и W');

  sex = userInputSex;
} while (!sex || (sex !== 'ж' && sex !== 'м' && sex !== 'Ж' && sex !== 'М'));
console.log(sex);

if (sex === 'Ж' || sex === 'ж') {
  if (age >= PENSION_AGE_W) {
    pension = 'да';
  } else {
    pension = 'нет';
  }
} else {
  if (age >= PENSION_AGE_M) {
    pension = 'да';
  } else {
    pension = 'нет';
  }
}
let userInfo = alert(`ФИО: ${lastName} ${firstName} ${midleName}\n
Возраст: ${age}\n
Пол: ${sex}\n
На пенсии: ${pension}
`);
