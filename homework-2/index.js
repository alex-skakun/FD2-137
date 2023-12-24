const STRING_EMPTY = '';
const string1 = 'Hello';
const string2 = 'false';

const duplicatedSymbols = findDuplicates(string1, string2);
alert(duplicatedSymbols.length > 0
    ? `Строка 1 ${string1} 
Строка 2  ${string2} 
Совпадающие символы  ${duplicatedSymbols}`
    : 'Совпадений нет'
);

function findDuplicates(string1, string2) {
    if (isValidString(string1) && isValidString(string2)) {
        let result = '';

        for (let char of string1) {
            result += string2.includes(char) && !result.includes(char) ? char : '';
        }

        return result.length === 0 ? STRING_EMPTY : result;
    }
    else {
        return STRING_EMPTY;
    }

}

function isValidString(value) {
    return value && typeof value === 'string' ? true : false;
}

