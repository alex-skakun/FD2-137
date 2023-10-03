const word1 = 'Hello';
const word2 = 'Welcome';


function findDuplicates(string1, string2) {
    string1 = checkForString(string1);
    string2 = checkForString(string2);
    if (string1 == '' || string2 == '') {
        return '';
    }

    string1 = changeToLowercase(string1);
    string2 = changeToLowercase(string2);

    return checkDuplicates(string1, string2);

}

function checkDuplicates(str1, str2) {
    let symbols = '';
    for (let char1 of str1) {
        for (let char2 of str2) {
            if (char1 == char2) {
                let count = 0;
                for (let char3 of symbols) {
                    if (char3 == char1) {
                        count += 1;
                    }
                }
                if (count == 0) {
                    symbols += char2;
                }
            }
        }
    }
    return symbols;
}

function checkForString(str0) {
    let correct = '';
    if (typeof str0 != 'string') {
        return correct = '';
    }
    return str0;
}


function changeToLowercase(str) {
    let newStr = '';
    for (let symbol of str) {
        if ((symbol.charCodeAt() >= 65 && symbol.charCodeAt() <= 90) || (symbol.charCodeAt() >= 1040 && symbol.charCodeAt() <= 1071)) {
            let cod = symbol.charCodeAt() + 32;
            newStr += String.fromCharCode(cod);
        }
        else {
            newStr += symbol;
        }
    }

    return newStr;
}

alert(findDuplicates(word1, word2));
