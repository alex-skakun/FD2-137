const MAX_AGE = 150;
const MIN_AGE = 0;
let firstName;
let lastName;
let middleName;
let normalizedUserInput = "";
let gender;

do {
  firstName = prompt("Enter your first name");
} while (
  !firstName ||
  (firstName ? firstName.charAt(0) === " " : (firstName = ""))
);

do {
  lastName = prompt("Enter last name");
} while (
  !lastName ||
  (firstName ? firstName.charAt(0) === " " : (firstName = ""))
);

do {
  middleName = prompt("Enter your middle name");
} while (
  !middleName ||
  (firstName ? firstName.charAt(0) === " " : (firstName = ""))
);

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
  gender = prompt("Enter your gender");
} while (
  !gender ||
  gender.charAt(0) === " " ||
  (gender.charAt(0) !== "м" &&
  gender.charAt(0) !== "ж") &&
  (gender.charAt(0) !== "М" &&
  gender.charAt(0) !== "Ж")
  // (gender.toUpperCase() !== "М" && gender.toUpperCase() !== "Ж")
);

let fio = `${lastName} ${firstName} ${middleName} ${normalizedUserInput} ${gender}`;

alert(fio);
