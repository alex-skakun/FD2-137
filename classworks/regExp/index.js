function replaceLongColors(text) {
  return text.replace(
    /#([\da-f])\1{2}([\da-f])\2([\da-f])\3\b/gi,
    (_, r, g, b) => `#${r}${g}${b}`,
  );
}

function replaceLongColors2(text) {
  return text.replace(
    /\b#(?<red>[\da-f]{2})(?<green>[\da-f]{2})(?<blue>[\da-f]{2})\b/gi,
    (_, red, green, blue) => `#${r}${g}${b}`,
  );
}

function toCamelCase1(text) {
  return text.replace(
    /_[a-z]/gi,
    (match) => match.charAt(1)
      .toUpperCase(),
  );
}

function toCamelCase2(text) {
  return text.replace(
    /_([a-z])/gi,
    (_, letter) => letter.toUpperCase(),
  );
}

function toCamelCase3(text) {
  return text.replace(
    /_(?<letter>[a-z])/gi,
    (...args) => args.at(-1)
      .letter
      .toUpperCase(),
  );
}

const dshghef = (...args) => x => {

};
