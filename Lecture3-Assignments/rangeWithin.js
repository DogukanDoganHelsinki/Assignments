// Assignment 3.14: Range Within
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
let newArray = [];

const range = (num1, num2) => {
  while (num1 <= num2) {
    newArray.push(num1);
    num1++;
  }
  return newArray;
};

console.log(range(num1, num2));
