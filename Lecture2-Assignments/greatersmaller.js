//Assignment 2.14: Greater, smaller or equal

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const numberOne = prompt("Number 1 : ");
const numberTwo = prompt("Number 2 : ");
const helloWorld = prompt("What are the secret words? : ");

const parsedNumberOneToInt = parseInt(numberOne);
const parsedNumberTwoToInt = parseInt(numberTwo);

function compareNumbers(
  parsedNumberOneToInt,
  parsedNumberTwoToInt,
  helloWorld
) {
  if (parsedNumberOneToInt > parsedNumberTwoToInt) {
    console.log(
      `${parsedNumberOneToInt} is greater than ${parsedNumberTwoToInt}`
    );
  } else if (parsedNumberOneToInt < parsedNumberTwoToInt) {
    console.log(
      `${parsedNumberOneToInt} is smaller than ${parsedNumberTwoToInt}`
    );
  } else if (
    parsedNumberOneToInt === parsedNumberTwoToInt &&
    helloWorld === "hello world"
  ) {
    console.log("yay, you guessed the password");
  } else if (parsedNumberOneToInt === parsedNumberTwoToInt) {
    console.log(`${parsedNumberOneToInt} is equal to ${parsedNumberTwoToInt}`);
  } else {
    console.log("We could not get the numbers correctly, please try again");
  }
}
compareNumbers(parsedNumberOneToInt, parsedNumberTwoToInt, helloWorld);
