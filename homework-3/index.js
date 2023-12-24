const columns = ['name', 'count', 'price', 'client'];
const data = [
   { name: 'Хлеб', count: 12, price: 14.99, client:'Ivanov' },
   { name: 'Молоко', count: 3, price: 3.2, client:'Petrov'  },
   { name: 'Сыр', count: 1, price: 100, client:'Sidorenko'  },
   { name: 'Вода', count: 2, price: 5.5, client:'Abramovitch'  },
   { name: 'Колбаса', count: 3, price: 25.5, client:'Vovk'  },
];

const textTable = createTextTable(columns, data);
console.log(textTable);


function createTextTable(columns, data) {
   let textTable = '';

   // получаем максимальную длину колонок
   const columnsLengths = getColumnsLengths(columns, data);

   for (let i = 0; i < data.length; i++) {
      let normalizeStr = '│'
      
      for (key in data[i]) {
         normalizeStr = normalizeStr + (typeof data[i][key] === 'string' ? addSpaceStr(columnsLengths[key], data[i][key]) : addSpaceNum(columnsLengths[key], data[i][key])) + '│';
      }

      textTable = textTable + normalizeStr + '\n' + ((i === data.length - 1) ? '' : getBorder(columnsLengths, '├', '┤', '┼') + '\n');
   }

   return getBorder(columnsLengths, '┌', '┐', '┬') + '\n' + textTable + getBorder(columnsLengths, '└', '┘', '┴');
}

// возвращает объект, содержащий имена колонок и их максимальную длину
function getColumnsLengths(columns, data) {
   const allLength = {};

   for (let i = 0; i < columns.length; i++) {
      allLength[columns[i]] = getMaxLength(data, columns[i]);
   }
   return allLength;
}

// возвращает максимальную длину значения поля в объекте
function getMaxLength(data, fieldName) {
   const newArr = structuredClone(data);
   return Math.max.apply(null, newArr.map((el) => String(el[fieldName]).length)) + 2;  // учитываем пробелы слева и справа
}

// нормализация строки пробелами до требуемой длины(для строк)
function addSpaceStr(maxLength, str) {
   let result = ' ' + str;

   for (let i = 1; i < maxLength - str.length; i++) {
      result += ' ';
   }

   return result;
}

// нормализация строки пробелами до требуемой длины(для чисел)
function addSpaceNum(maxLength, num) {
   const numToString = String(num);
   let result = numToString;

   for (let i = 1; i < maxLength - numToString.length; i++) {
      result = ' ' + result;
   }
   return result + ' ';
}

// строим верхнюю, нижнюю и промежуточную границы таблицы
function getBorder(columnsLengths, charStart, charEnd, charMiddle) {

   let border = charStart;
   const endEl = Object.keys(columnsLengths).reverse()[0]; // последний ключ в объекте

   for (key in columnsLengths) {
      for (let j = 0; j < columnsLengths[key]; j++) {
         border += '─';
      }

      border += key === endEl ? charEnd : charMiddle;
   }

   return border;

}
// результат в консоли:
// ┌────────┬────┬───────┐
// │ Хлеб   │ 12 │ 14.99 │
// ├────────┼────┼───────┤
// │ Молоко │  3 │   3.2 │
// ├────────┼────┼───────┤
// │ Сыр    │  1 │    10 │
// ├────────┼────┼───────┤
// │ Вода   │  2 │   5.5 │
// └────────┴────┴───────┘