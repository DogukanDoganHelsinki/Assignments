// Assignment 4.8: Above Average

const array = [1, 5, 9, 3, 4, 2, 1];

const average = (array) => {
  const sum = array.reduce((acc, number) => {
    return acc + number;
  }, 0);
  const totalAverage = sum / array.length;
  const finalArray = array.filter((number) => number > totalAverage);
  console.log(finalArray);
};

average(array);
