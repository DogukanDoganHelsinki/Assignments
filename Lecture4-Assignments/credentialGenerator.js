// Assignment 4.11: Credential Generator

const generator = (firstName, lastName) => {
  const currentYear = new Date().getFullYear();
  const last2Str = String(currentYear).slice(-2);
  const randomLetter = Math.round(Math.random() * (90 - 65) + 65);
  const randomSpecialCharacter = Math.round(Math.random() * (47 - 33) + 33);
  let answersArray = [];

  const userName = `B${last2Str}${lastName.charAt(0).toLowerCase()}${lastName
    .charAt(1)
    .toLowerCase()}${firstName.charAt(0).toLowerCase()}${firstName
    .charAt(1)
    .toLowerCase()}`;

  answersArray.push(userName);

  const password = `${String.fromCharCode(randomLetter)}${firstName
    .charAt(0)
    .toLowerCase()}${lastName.slice(-1).toUpperCase()}${String.fromCharCode(
    randomSpecialCharacter
  )}${last2Str}`;

  answersArray.push(password);

  return answersArray;
};

console.log(generator("John", "Doe"));
