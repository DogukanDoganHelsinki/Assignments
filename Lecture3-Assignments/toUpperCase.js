// Assignment 3.1: toUpperCase

function toUpperCase(str) {
  const strArray = str.split(" ");
  const newArray = strArray.map(
    (element) =>
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  );
  const arrayToString = newArray.join(" ");

  console.log(arrayToString);
}
toUpperCase("Here is MY example SenteNCE");
