Домашнее задание №2
===================

> редактируйте файл index.js

Напишите функцию, которая будет находить повторяющиеся символы в двух строках.
Результатом работы функции должна быть строка, которая состоит только из тех символов,
которые присутствуют как в первой, так и во второй строке. Если таких символов нет, то вернуть пустую строку.
Так же требуется возвращать пустую строку, если один из аргументов не являлся строкой.

### Пример использования такой функции
```javascript
const string1 = 'Hello';
const string2 = 'Welcome';
const duplicatedSymbols = findDuplicates(string1, string2);

// duplicatedSymbols: 'el'
```

> Рекомендуется обратить внимание на некоторые базовые возможности строк, возможно,
> есть специальная функция, которая облегчит выполнение данного задания. Кроме `.loLowerCase()` 😄.
