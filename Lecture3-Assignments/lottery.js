//Assignment 3.7: Lottery

function generateNumbers() {
  let array = [];
  let n = 0;

  while (n <= 7) {
    const number = Math.round(Math.random() * 40);
    array.concat(number).forEach((element) => {
      if (!array.includes(element)) {
        array = [...array, element];
      }
    });
    n++;
  }
  return array;
}
console.log(generateNumbers());
