const MAX_AGE = 150;
const MIN_AGE = 0;
const SEX_MALE = "М";
const SEX_FEMALE = "Ж";
const retiredAge = sex === SEX_MALE ? RETIRED_MALE_AGE : RETIRED_FEMALE_AGE;
const retired = age >= retiredAge;

const firstName = getUserInput(
  "Enter your first name",
  keepWithoutChange,
  isNonEmptyString
);
const lastName = getUserInput(
  "Enter your lastname name",
  keepWithoutChange,
  isNonEmptyString
);
const middleName = getUserInput(
  "Enter your midle name",
  keepWithoutChange,
  isNonEmptyString
);
let sex = getUserInput(
  "Enter your gender",
  "м",
  transformToSex,
  isNonEmptyString
);

const age = getUserInput("Enter your age", transformToNumber, isValidAge);

let fio = `
 ФИО: ${lastName} ${firstName} ${middleName};
 Возраст: ${age};
 Пол: ${sex};
 На пенсии: ${retired}`;

alert(fio);

function keepWithoutChange(data) {
  return data;
}

function transformToNumber(data) {
  if (!data) {
    return NaN;
  }
  return Number(replaceSymbol(data, ",", "."));
}

function isNonEmptyString(value) {
  return Boolean(value);
}

function isValidAge(inputAge) {
  return (
    Number.isFinite(inputAge) && inputAge >= MIN_AGE && inputAge <= MAX_AGE
  );
}

function transformToSex(data) {
  switch (data) {
    case "м":
    case "М":
    case "m":
    case "M":
      return SEX_MALE;
    case "ж":
    case "Ж":
    case "f":
    case "F":
      return SEX_FEMALE;
    default:
      return "";
  }
}

function getUserInput(message, transformData, isValid) {
  let userInput = null;
  let isCancelled = false;

  do {
    const rawUserInput = prompt(message);

    isCancelled = rawUserInput === null;
    isCancelled = isCancelled ? null : transformData(rawUserInput);
  } while (!isCancelled || !isValid(userInput));

  return userInput;
}

function replaceSymbol(inputString, targetSymbol, replacementSymbol) {
  let resultString = "";

  for (const char of inputString) {
    if (char === targetSymbol) {
      resultString += replacementSymbol;
    } else {
      resultString += char;
    }
  }
  return resultString;
}
