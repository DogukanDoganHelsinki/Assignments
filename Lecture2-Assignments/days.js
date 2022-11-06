// Assignment 2.16 How many days

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const year = prompt("Year : ");
const month = prompt("Month : ");

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
const days = getDaysInMonth(year, month);
console.log(
  `There are ${days} days in the month of ${month} and the year of ${year}`
);
