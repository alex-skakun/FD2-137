//const string1           = 'Welcome';
//const string2           = 'hello';

const string1           = 'hello';
const string2           = 'Welcome';

//const string1           = '0';
//const string2           = 'Welcome0';

//const string1           = 'Welcome';
//const string2           = '0';

//const string1           = 0;
//const string2           = 'Welcome0';

//const string1           = 'Welcome';
//const string2           = 0;

//const string1           = NaN;
//const string2           = 'Walcome';

//const string1           = 'Walcome';
//const string2           = NaN;

//const string1           = null;
//const string2           = 'Welcomeu';

//const string1           = 'Welcomeu';
//const string2           = null;

//const string1           = undefined;
//const string2           = 'Welcome';

//const string1           = 'Welcome';
//const string2           = undefined;

//const string1           = '';
//const string2           = 'Welcome';

//const string1           = 'Welcome';
//const string2           = '';

const duplicatedSymbols = findDuplicates(string1, string2);
console.log(typeof duplicatedSymbols);
console.log(duplicatedSymbols);

const duplicatedSymbols2 = findDuplicates2(string1, string2);
console.log(typeof duplicatedSymbols2);
console.log(duplicatedSymbols2);

function findDuplicates(str1, str2){     
    let result = '';
    const lStr1 = valueToStringLowCase(str1);
    const lStr2 = valueToStringLowCase(str2);
    lStr1.split('').forEach(let => {
        result += lStr2.includes(let) && !result.includes(let) ? let : '';
    });
    return result;
}

//функция человека, который очень хотел разобраться с reduce (также выше есть функция здорового человека "findDuplicates")
function findDuplicates2(str1, str2){     
    const lStr1 = valueToStringLowCase(str1);
    const lStr2 = valueToStringLowCase(str2);
    return lStr1 && lStr1.split('').reduce((preVal, currVal, curInd) =>
        preVal = (curInd === 0 ? '' : preVal) 
                    + (lStr2.includes(currVal) && (curInd === 0 || !preVal.includes(currVal)) 
                        ? currVal : '')
    , 0);
}

function valueToStringLowCase(val){
    return val ? String(val).toLowerCase() : '';
}