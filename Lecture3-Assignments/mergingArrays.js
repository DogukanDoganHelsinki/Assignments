// Assignment 3.6: Merging Arrays

const arr1 = [1, 2, 3, 4, 4];
const arr2 = [3, 4, 5, 6, 6];

function concatArray() {
  let result = [];

  arr1.concat(arr2).forEach((element) => {
    if (!result.includes(element)) {
      // result = result.concat(element);  //Concat
      result = [...result, element]; //Spread syntax
    }
  });
  return result;
}

console.log(concatArray(arr1, arr2));
