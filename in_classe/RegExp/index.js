// function replaceLongColors(text) {
//   return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3/gi, (_, r, g, b) => {
//     return `#${r}${g}${b}`;
//   });
// }

function toCamelCase1(text) {
  return text.replace(/_[a-z]/gi, (match) => match.chartAt(1).toUpperCase());
}

function toCamelCase2(text) {
  return text.replace(/_([a-z])/gi, (_, letter) => letter.toUpperCase());
}

function toCamelCase3(text) {
  return text.replace(/_(?<letter>[a-z])/gi, (...args) =>
    args.at(-1).letter.toUpperCase()
  );
}
