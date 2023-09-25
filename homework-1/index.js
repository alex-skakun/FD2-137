const MAX_AGE = 150;
const MIN_AGE = 1;
const M_RETIRED = 63;
const F_RETIRED = 58;

let firstName ;
let lastName ;
let middleName;
let age;
let gender;
let isRetired;

do {
    let userInputGender = prompt('Введите ваш пол (допустимые варианты мужской/м/М/женский/ж/Ж)');

    userInputGender = userInputGender? userInputGender.toUpperCase(): '';

    switch (userInputGender){
     case 'М':
     case 'МУЖСКОЙ':
     case 'Ж':
     case 'ЖЕНСКИЙ':
        gender = userInputGender.substring(0, 1);
        break 
     default:
        gender = '';
    }  

} while (!gender)


do {
    const userInputAge = prompt('Введите ваш возраст' );
    age = userInputAge? Number(userInputAge.replaceAll(',','.')) : NaN;    
} while (!isFinite(age) || age > MAX_AGE || age < MIN_AGE) 

do {
    firstName = prompt('Введите ваше имя') ;
} while (!firstName)  // 

do {
    lastName = prompt('Введите вашу фамимлию') ;
} while (!lastName)

do {
    middleName = prompt('Введите ваше отчество') ;
} while (!middleName)

if ((gender === 'М' && age >= M_RETIRED) || (gender === 'Ж' && age >= F_RETIRED))
     { isRetired = 'Да';}
else  
     { isRetired = 'Нет';}

let  result = `
ФИО : ${lastName} ${firstName} ${middleName}
Возраст : ${age}
Пол : ${gender}
На пенсии : ${isRetired} 
`
alert(result) ;    

