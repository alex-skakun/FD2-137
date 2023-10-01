let string1 = prompt('Введите строку 1');
let string2 = prompt('Введите строку 2');

function withDuplicateSymbols(stringToCheck, stringToCheckWith) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return '';
    }

    let flag = '';

    if (string1 >= string2){
        flag = true;
    } else {
        flag = false;
    }

    let duplicatedSymbols = '';

    if (flag === 'true') {
        for (i = 0; i < string2.length; i++) {
            if (string1.find(string2[i])) {
                duplicatedSymbols += string2[i]
            }
        }
    } else {
        for (i = 0; i < string1.length; i++) {
            if (string2.find(string1[i])) {
                duplicatedSymbols += string1[i]
            }
        }
    }

    return duplicatedSymbols;
}

withDuplicateSymbols(string1, string2);