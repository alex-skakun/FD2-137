const MAX_AGE = 150;
const MIN_AGE = 0;
let firstName;
let lastName;
let middleName;
let normalizedUserInput = "";
let gender;
let pension;

do {
  firstName = prompt("Enter your first name");
} while (!firstName || firstName.charAt(0) === " ");

do {
  lastName = prompt("Enter last name");
} while (!lastName || lastName.charAt(0) === " ");

do {
  middleName = prompt("Enter your middle name");
} while (!middleName || middleName.charAt(0) === " ");

do {
  const userInput = prompt("enter your age");
  userInput ? Number(userInput) : NaN;

  for (const char of userInput) {
    if (char === ",") {
      normalizedUserInput += ".";
    } else {
      normalizedUserInput += char;
    }
  }
} while (
  !isFinite(normalizedUserInput) ||
  normalizedUserInput <= MIN_AGE ||
  normalizedUserInput >= MAX_AGE
);

do {
  gender = prompt("Enter your gender", "м");
} while (
  // !gender ||
  gender !== "м" &&
  gender !== "ж" &&
  gender !== "М" &&
  gender !== "Ж"
  // (gender.toUpperCase() !== "М" && gender.toUpperCase() !== "Ж")
);

pension =
  ((gender === "М" || gender === "м") && normalizedUserInput < 63) ||
  ((gender === "Ж" || gender === "ж") && normalizedUserInput < 58)
    ? pension = "Нет"
    : pension = "Да";

let fio = `
 ФИО: ${lastName} ${firstName} ${middleName};
 Возраст: ${normalizedUserInput};
 Пол: ${gender};
 На пенсии: ${pension}`;

alert(fio);
