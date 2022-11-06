const number = process.argv[2];

function countSheep(amountOfSheep) {
  let result = "";

  for (let i = 1; i <= amountOfSheep; i++) {
    result += `${i} sheep...`;
  }

  return result;
}
console.log(countSheep(number));
