let string1 = prompt('Введите строку 1');
let string2 = prompt('Введите строку 2');

function withDuplicateSymbols(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return '';
    }

    let flag = '';

    if (string1.length >= string2.length){
        flag = true;
    } else {
        flag = false;
    }

    let duplicatedSymbols = '';

    if (flag) {
        for (i = 0; i < string2.length; i++) {
            if (string1.includes(string2[i])) {
                duplicatedSymbols += string2[i]
            }
        }
    } else {
        for (i = 0; i < string1.length; i++) {
            if (string2.includes(string1[i])) {
                duplicatedSymbols += string1[i]
            }
        }
    }

    return duplicatedSymbols;
}

alert(withDuplicateSymbols(string1, string2));