let firstName; let lastName; let patronymic; let sex; let age; let retired; let sex1;
do{lastName = prompt('Введите фамилию');}
while (!lastName);

do{firstName = prompt('Введите имя');}
while (!firstName);

do{patronymic = prompt('Введите отчество');}
while (!patronymic);

do{age = prompt('Введите возраст');

let normalizedAge = '';
for(const char of age){
    if(char === ','){
        normalizedAge +='.'
    }
    else {
        normalizedAge +=char;
    }
    age = normalizedAge
   
}

}
while (isNaN(age) ||age<0 || age>150);

do{sex = prompt('Введите пол');
sex1 = sex.toUpperCase();
}

while (!sex1 || sex1 !== 'Ж' && sex1 !== 'М' && sex1 !== 'ЖЕНСКИЙ'  && sex1 !== 'МУЖСКОЙ' && sex1 !== 'ЖЕНЩИНА' && sex1 !== 'МУЖЧИНА' && sex1 !== 'МУЖ' && sex1 !== 'ЖЕН' && sex1 !== 'ЖЕНСК' && sex1 !== 'МУЖСК'  );

if(sex1 === 'Ж' || sex1 === 'ЖЕН' || sex1 === 'ЖЕНСКИЙ' || sex1 === 'ЖЕНЩИНА' || sex1 === 'ЖЕНСК')
{sex = "Ж"}

if(sex1 === 'М' || sex1 === 'МУЖ' || sex1 === 'МУЖЧИНА' || sex1 === 'МУЖСКОЙ' || sex1 === 'МУЖСК')
{sex = "М"}

sex === 'Ж' && age > 57? retired = 'Да' : retired = 'Нет'
sex === 'М' && age > 62? retired = 'Да' : retired = 'Нет'

let info =`ФИО: ${lastName} ${firstName} ${patronymic}\nВозраст:  ${age}\nПол:  ${sex}\nНа пенсии:  ${retired}`
alert(info)