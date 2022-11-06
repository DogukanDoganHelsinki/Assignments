// 1.11

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const name1 = prompt("Name 1 : ");
const name2 = prompt("Name 2 : ");
const name3 = prompt("Name 3 : ");

function lengthComparison(name1, name2, name3) {
  const nameOneLength = name1.length;
  const nameTwoLength = name2.length;
  const nameThreeLength = name3.length;

  const arrayOfNames = [
    { name: name1, length: nameOneLength },
    { name: name2, length: nameTwoLength },
    { name: name3, length: nameThreeLength },
  ];
  arrayOfNames.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(arrayOfNames[0].name, arrayOfNames[1].name, arrayOfNames[2].name);
}
lengthComparison(name1, name2, name3);
