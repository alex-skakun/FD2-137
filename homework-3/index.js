'use strict';

const columns = ['name', 'countt', 'price'];
const data = [
    { name: 'Хлеб', count: 22, price: 14.99 },
    { name: 'Молоко', count: 3, price: 3.2 },
    { name: 'Сыр', count: 1, price: 10 },
    { name: 'Вода', count: 2, price: 5.5 },
];
const columnWidths = {};//Создаём объект с максимальной длинной строк
countMaxColumnWidths (data, columns);
const textTable = createTextTable(columns, data);
console.log(textTable);


function countMaxColumnWidths (data, columns) {
        columns.forEach ((id) =>{
            let counterLength = 0;
            data.forEach((elem) =>{
                if (elem[id].toString().length > counterLength) {
                counterLength = elem[id].toString().length;
                }   
            });
            columnWidths[id] = counterLength;     
        });
   }

function buildStringSymbols (firstSymbol, secondSymbol, thirdSymbol){
    return firstSymbol + columns.map((column) => '─'.repeat(columnWidths[column]+2)).join(secondSymbol)+thirdSymbol;
}  

function createTextTable(columns, data) {
//Создаём переменную результат
    let resultTextTable ='';
    data.forEach((dataObj, i) => {
//вставляем верхнюю  линию  
        if (i === 0){
            resultTextTable += buildStringSymbols('┌','┬','┐');
        }
//вставляем строки с данными
        resultTextTable += `\n| ${columns.map((column) =>{
            if (typeof dataObj[column] === 'string') {                
                return dataObj[column] + " ".repeat(columnWidths[column] - dataObj[column].length);
                } else {
                return " ".repeat(columnWidths[column] - dataObj[column].toString().length) + dataObj[column];
                }   
        }).join(' | ')} |\n`;
//вставляем разделительные линии или нижнюю линию
        if (data.length - 1 === i) {
            resultTextTable += buildStringSymbols('└','┴','┘');
        } else {
            resultTextTable += buildStringSymbols('├','┼','┤');
        }
    });
    return resultTextTable;
}





