const columns = ['name', 'count', 'price'];
const data = [
    { name: 'Хлеб', count: 12, price: 14.99 },
    { name: 'Молоко', count: 3, price: 3.2 },
    { name: 'Сыр', count: 1, price: 10 },
    { name: 'Вода', count: 2, price: 5.5 },
];

function createTextTable(columns, data) {
    const columnWidths = {};

    for (const column of columns) {
        columnWidths[column] = column.length;
    }

    for (const item of data) {
        for (const column of columns) {
            const value = String(item[column]);
            if (value.length > columnWidths[column]) {
                columnWidths[column] = value.length;
            }
        }
    }

    let table = '┌';
    for (const column of columns) {
        table += '─'.repeat(columnWidths[column] + 2) + '┬';
    }
    table = table.slice(0, -1) + '┐\n';

    for (const item of data) {
        table += '│';
        for (const column of columns) {
            const value = String(item[column]);
            const padding = columnWidths[column] - value.length;
            if (typeof item[column] === 'number') {
                table += ' '.repeat(padding) + value + '  │';
            } else {
                table += value + ' '.repeat(padding) + '  │';
            }
        }

        table += '\n';

        if (item !== data[data.length - 1]) {
            table += '├';
            for (const column of columns) {
                table += '─'.repeat(columnWidths[column] + 2) + '┼';
            }
            table = table.slice(0, -1) + '┤\n';
        }
    }

    table += '└';
    for (const column of columns) {
        table += '─'.repeat(columnWidths[column] + 2) + '┴';
    }
    table = table.slice(0, -1) + '┘';

    return table;
}

const textTable = createTextTable(columns, data);

console.log(textTable);