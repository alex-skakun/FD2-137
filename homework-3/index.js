const columns = ['name', 'count', 'price'];
let data = [{ name: 'Хлеб', count: '12', price: '14.99' },
{ name: 'Молоко', count: '3', price: '3.2' },
{ name: 'Сыр', count: '1', price: '10' },
{ name: 'Вода', count: '2', price: '5.5' },
]; let d = []; let y = []; let o = []
const textTable = createTextTable(columns, data);
console.log(textTable);
function createTextTable(columns, data) {
    for (let i = 0; i < data.length; i++) {
        d[i] = data[i].name.length;
    }
    let dd = (Math.max.apply(Math, d));
    let k = d.indexOf(Math.max.apply(Math, d))
    for (let i = 0; i < data.length; i++) {
        while (data[i].name.length < data[k].name.length) {
            data[i].name += ' ';
        }
    }
    for (let i = 0; i < data.length; i++) {
        y[i] = data[i].count.length;
    }
    let yy = (Math.max.apply(Math, y));
    let f = y.indexOf(Math.max.apply(Math, y))
    for (let i = 0; i < data.length; i++) {
        while (data[i].count.length < data[f].count.length) {
            data[i].count = ' ' + data[i].count;
        }
    }
    for (let i = 0; i < data.length; i++) {
        o[i] = data[i].price.length;
    }
    let n = o.indexOf(Math.max.apply(Math, o))
    for (let i = 0; i < data.length; i++) {
        while (data[i].price.length < data[n].price.length) {
            data[i].price = ' ' + data[i].price;
        }
    }
    const R = '\u254C'; const Q = '\u254e'; let strin = R; let arr = [];
    let str = []; let strinTop = ''; let strinBottom = '';
    for (i = 0; i < 4; i++) {
        str[i] = `${Q} ${data[i].name} ${Q} ${data[i].count} ${Q} ${data[i].price} ${Q}`;
        while (str[i].length - 2 > strin.length) {
            strin = strin + R;
            strinTop = '\u250C' + strin + '\u2510' + '\n';
            strinBottom = '\n' + '\u2514' + strin + '\u2518';
        }
        str[i].length - 2 === strin.length ?
            strin = '\n' + '\u251C' + strin + '\u2524' + '\n' : 0;
        strinTop = changeSymbols(strinTop, 3, 6, '\u252C')
        strinBottom = changeSymbols(strinBottom, 4, 7, '\u2534')
        strin = changeSymbols(strin, 4, 7, '\u253C')
        function changeSymbols(stringUn, numb1, numb2, symbol) {
            arr = [...stringUn]
            arr[dd + numb1] = symbol;
            arr[dd + yy + numb2] = symbol;
            string = arr.join('')
            return string
        }
    } return strinTop + str.join(strin) + strinBottom
}