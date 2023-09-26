const MAX_AGE = 150;
const MIN_AGE = 0;
let firstName;
let lastName;
let middleName;
let gender;
let pension;
let age;


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
  let userInput;

  do {
    userInput = prompt("Enter your age");
  } while (!userInput);

  let normalizedUserInput = "";

  for (const char of userInput) {
    if (char === ",") {
      normalizedUserInput += ".";
    } else {
      normalizedUserInput += char;
    }
  }

  age = Number(normalizedUserInput);
} while (!isFinite(age) || age < MIN_AGE || age > MAX_AGE);

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
  ((gender === "М" || gender === "м") && age < 63) ||
  ((gender === "Ж" || gender === "ж") && age < 58)
    ? (pension = "Нет")
    : (pension = "Да");

let fio = `
 ФИО: ${lastName} ${firstName} ${middleName};
 Возраст: ${age};
 Пол: ${gender};
 На пенсии: ${pension}`;

alert(fio);
