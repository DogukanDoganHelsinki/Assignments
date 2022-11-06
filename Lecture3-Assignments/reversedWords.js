// Assignment 3.15: Reversed Words

const reverseTheWord = (text) => {
  const reversedSentence = text.split(" ");

  let newArray = [];
  for (let i = 0; i < reversedSentence.length; i++) {
    newArray = [...newArray, reversedSentence[i].split("").reverse().join("")];
  }
  const newArrayToString = newArray.toString().replaceAll(",", " ");
  return newArrayToString;
};

console.log(reverseTheWord("this is a very long sentence"));
