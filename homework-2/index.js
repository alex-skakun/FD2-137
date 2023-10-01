const string1 = prompt('Введите первую строку');
const string2 = prompt('Введите вторую строку');
const duplicatedSymbols = findDuplicates(string1, string2);
alert("Повторяющиеся символы: " + duplicatedSymbols)


function findDuplicates(data1, data2) {
    if (typeof data1 === 'string' && typeof data2 === 'string') {
        let resultString = ''; let re = ''; let result = '';
        for (let i = 0; i <= data1.length - 1; i++) {
            if (re = data1.charAt(i)) {
                result = data2.match(re);
                if (!resultString.match(data2.match(re))) { result !== null ? resultString += data2.match(re) : resultString += '' }
            }
        }
        if (resultString.length === 0) {
            return resultString = '';
        } else { return resultString }
    } else { return resultString = '' }
}