// Assignment 3.2: Random Number

/**
 * A function takes two values such as
 * @param {*} min
 * @param {*} max
 * and returns a random number back within range
 */

function randomNumber(min, max) {
  const newNumber = Math.round(Math.random() * (max - min) + min);
  console.log(newNumber);
}
randomNumber(3, 10);
