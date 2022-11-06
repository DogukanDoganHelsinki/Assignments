// Assignment 4.9: Count Vowels

const vowelArray = ["a", "e", "i", "o", "u", "y"];

const getVowelCount = (word) => {
  const wordArray = word.split("");
  console.log(wordArray);
  const includedLetters = wordArray.filter((letter) => {
    if (vowelArray.includes(letter)) {
      let includedLettersArray = [];
      includedLettersArray.push(letter);
      return includedLettersArray;
    }
  });
  console.log(`For ${word} the length is ${includedLetters.length}`);
};

getVowelCount("kirmizi");
