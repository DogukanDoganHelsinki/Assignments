// Assignment 3.8: Fibonacci Sequence

const fibonacci = (number) => {
  let n1 = 0;
  let n2 = 1;
  let nextVal;

  for (let i = 0; i <= number - 1; i++) {
    console.log(n1);
    nextVal = n1 + n2;
    n1 = n2;
    n2 = nextVal;
  }
};

fibonacci(8);
