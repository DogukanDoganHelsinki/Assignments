// Assignment 2.15 Largest and smallest

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const numberOne = prompt("Number 1 : ");
const numberTwo = prompt("Number 2 : ");
const numberThree = prompt("Number 3 : ");

const parsedNumberOneToInt = parseInt(numberOne);
const parsedNumberTwoToInt = parseInt(numberTwo);
const parsedNumberThreeToInt = parseInt(numberThree);

function compareNumbers(
  parsedNumberOneToInt,
  parsedNumberTwoToInt,
  parsedNumberThreeToInt
) {
  const arrayOfNumbers = [
    parsedNumberOneToInt,
    parsedNumberTwoToInt,
    parsedNumberThreeToInt,
  ];

  arrayOfNumbers.sort(function (a, b) {
    return b - a;
  });

  if (
    parsedNumberOneToInt === parsedNumberTwoToInt &&
    parsedNumberTwoToInt === parsedNumberThreeToInt
  ) {
    console.log("The numbers are equal");
  } else {
    console.log(
      `The largest number is ${arrayOfNumbers[0]} , the smallest number is ${arrayOfNumbers[2]} `
    );
  }
}

compareNumbers(
  parsedNumberOneToInt,
  parsedNumberTwoToInt,
  parsedNumberThreeToInt
);
