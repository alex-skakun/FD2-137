// function replaceLongColors(text) {
//   return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3/gi, (_, r, g, b) => {
//     return `#${r}${g}${b}`;
//   });
// }

// function toCamelCase1(text) {
//   return text.replace(/_[a-z]/gi, (match) => match.chartAt(1).toUpperCase());
// }

// function toCamelCase2(text) {
//   return text.replace(/_([a-z])/gi, (_, letter) => letter.toUpperCase());
// }

// function toCamelCase3(text) {
//   return text.replace(/_(?<letter>[a-z])/gi, (...args) =>
//     args.at(-1).letter.toUpperCase()
//   );
// }

function t(text: String, data: Record<String, unknown>): string {
  return text.replace(/{\{(\w+)}\}/g, (match, key) => {
    if (Object.hasOwn(data, key)) {
      return String(data[key]);
    } else {
      return match;
    }
  });
}
function t(text, data) {
  return text.replace(/{\{(\w+)}\}/g, (match, key) => {
    return Object.hasOwn(data, key) ? String(data[key]) : match;
  });
}
t("у вас {{count}} товаров в корзине", { count: 6 });
