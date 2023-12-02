let symbol1 = ' ';
let symbol2 = ' ';
let duplicates = ' ';

function getDuplicateCharacters(string1, string2) {
  for (let index = 0; index < string1.length; index++) {
    symbol1 = string1[index];
    symbol2 = string2[index];

    if (symbol1 === symbol2) {
      duplicates += symbol1;
    } else {
      duplicates += '';
    }
  }
  return duplicates;
}

getDuplicateCharacters('Hello', 'Welcome');

alert(duplicates);
