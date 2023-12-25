const columns = ['name', 'count', 'price'];
const data = [
    {
        name: 'Хлеб',
        count: 12,
        price: 14.99
    },
    {
        name: 'Молоко',
        count: 3,
        price: 3.2
    },
    {
        name: 'Сыр',
        count: 1,
        price: 10
    },
    {
        name: 'Вода',
        count: 2,
        price: 5.5
    }
];

/* ************* ГЛАВНАЯ ФУНКЦИЯ !!! ************** */
function createTextTable(columns, data) {
    if (!Array.isArray(columns) || !Array.isArray(data)) {
        return '';
    }

    let maxColumnWidth = getMaxColumnWidth(data);
    //  console.log(maxColumnWidth);
    let rows = [];
    data.forEach(function (item, index) { // ... делать что-то с item console.log(item);
        rows.push(buildOneRow(item, maxColumnWidth));
    });

    return rows.join('\n');
}
/* ***************************************************** */

function getMaxColumnWidth(data) {
    let maxColumnName = 0,
        maxColumnCount = 0,
        maxColumnPrice = 0;
    // находим максимальную ширину каждого столбца для дополнения менее длинного текста пробелами
    data.forEach(function (item, index) {
        if (item.name.length > maxColumnName) {
            maxColumnName = item.name.length;
        }
        if (item.count.toString().length > maxColumnCount) {
            maxColumnCount = item.count.toString().length;
        }
        if (item.price.toString().length > maxColumnPrice) {
            maxColumnPrice = item.price.toString().length;
        }
    });
    // возвращаем объект где каждому ключу соответствует максимальная ширина колонки (name,count,price)  
    let maxObj = {
        name: maxColumnName + 1,
        count: maxColumnCount + 1,
        price: maxColumnPrice + 1
    };

    return maxObj;
}

function buildOneRow(item, maxColumnWidth) {
    let row = [];
    /*item = {
        name: 'Молоко',
        count: 3,
        price: 3.2
    }*/
    for (key in item) {
        // хлеб, 6, 2пробела справа 
        let where = (key === columns[0]) ? 'left' : 'right';
        row.push(alignText(item[key].toString(), maxColumnWidth[key], where));
    }

    return row.join('\u2502') + '\u2502';
}

// выравнивание ячейки таблицы т.е. добавление пробелов слева или справа
function alignText(value, maxColumnLength, where) {
    if (value.length < maxColumnLength) {
        if (where === 'left') {
            return value.padEnd(maxColumnLength);
        } else if (where === 'right') {
            return value.padStart(maxColumnLength);
        }
    }

    return value;
}

const textTable = createTextTable(columns, data);
console.log(textTable);
