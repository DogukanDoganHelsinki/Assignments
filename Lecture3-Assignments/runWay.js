// Assignment 3.10: Runway Numbers

let n = Number(process.argv[2]);

const newNumber = ~~n;

function runway(newNumber) {
  if (newNumber % 10 >= 5) {
    while (newNumber % 10 !== 0) {
      newNumber++;
    }
  } else if (newNumber % 10 < 5) {
    while (newNumber % 10 !== 0) {
      newNumber--;
    }
  } else {
    console.log("error");
  }

  return newNumber;
}

console.log(runway(newNumber));
