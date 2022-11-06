// Assignment 3.12: Indexed Alphabet

const word = process.argv[2];

const charIndex = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const letters = word.split("");

let array = [];

letters.map((letter) => {
  const test = charIndex[`${letter}`];
  array.push(test);
  console.log(array.join(""));
});
