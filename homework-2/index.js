const string1 = 'Hello';
const string2 = 'Welcome';
const duplicatedSymbols = findDuplicates(string1, string2);

function findDuplicates(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let result = "";
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        for (let i = 0; i < str1.length; i++) {
            if (str2.includes(str1[i]) && !result.includes(str1[i])) {
                result += str1[i];
            }
        }
        return result;
    }
    return result;
}

console.log(duplicatedSymbols);

