const columns = ['name', 'count', 'price'];
const data = [
    { name: 'Хлеб', count: 12, price: 14.99 },
    { name: 'Молоко', count: 3, price: 3.2 },
    { name: 'Сыр', count: 1, price: 10 },
    { name: 'Вода', count: 2, price: 5.5 },
];

function calcMaxWidthObject(array, obj) {
    const maxWidthObject = {};
    array.forEach(prop => {
      let  counter = 0;
        obj.forEach(element => {
            counter = Math.max(counter, element[prop].toString().length);
        });
        maxWidthObject[prop] = counter;

    });
    return maxWidthObject
}

function isTypeOf(array, obj) {
    const typeOfObj = {};
    array.forEach(prop => {
        let type = '';
        obj.forEach(element => {
            type = typeof (element[prop]);
        });
        typeOfObj[prop] = type;

    });
    return typeOfObj
}

function generateSplitString(spliter, tables, maxWidth) {
    let generateSpliter = spliter[0];

    for (let j = 0; j < tables.length; j++) {

        let max = maxWidth[tables[j]];
        generateSpliter += spliter[1].repeat(max + 2);
        if (j == tables.length - 1) {
            generateSpliter += spliter[2];
        }
        else {
            generateSpliter += spliter[3];
        }
    }
    generateSpliter += '\n';
    return generateSpliter

}


function createTextTable(table, pane) {
    let maxWidth = calcMaxWidthObject(table, pane);
    let typeOfProperty = isTypeOf(table, pane);

    let splitString1 = generateSplitString(['\u250C', '\u2500', '\u2510', '\u252C'], table, maxWidth);
    let splitString2 = generateSplitString(['\u251C', '\u2500', '\u2524', '\u253C'], table, maxWidth);
    let splitString3 = generateSplitString(['\u2514', '\u2500', '\u2518', '\u2534'], table, maxWidth);

    let answerString = splitString1;
    for (let counter = 0; counter < pane.length; counter++) {
        for (elemTable of table) {
           let max = maxWidth[elemTable];

            answerString += '\u2502';
            answerString += ' ';
            if (typeOfProperty[elemTable] == 'string') {
                answerString += pane[counter][elemTable];
                answerString += ' '.repeat(max - pane[counter][elemTable].length);
            }
            else {
                answerString += ' '.repeat(max - pane[counter][elemTable].toString().length);
                answerString += pane[counter][elemTable].toString();
            }
            answerString += ' ';
        }
        answerString += '\u2502';
        answerString += '\n';
        if (counter == pane.length - 1) {
            answerString += splitString3;
        }
        else {
            answerString += splitString2;
        }

    }
    return answerString
}

const textTable = createTextTable(columns, data);
console.log(textTable);
