// Assignment 2.18 Initial letters

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const name1 = prompt("Name 1 : ");
const name2 = prompt("Name 2 : ");
const name3 = prompt("Name 3 : ");

function firstLetter(name1, name2, name3) {
  const nameArray = [name1, name2, name3];
  console.log(nameArray[0][0], nameArray[1][0], nameArray[2][0]);
}
firstLetter(name1, name2, name3);
