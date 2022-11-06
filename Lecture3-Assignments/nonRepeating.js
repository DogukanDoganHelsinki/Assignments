// Assignment 3.5: Non-repeating Character

const nonRepeatChar = (str) => {
  const strArr = str.split("");
  return strArr.find((chr, idx) => {
    const nextChar = strArr[idx + 1];
    const prevChar = strArr[idx - 1];

    return chr !== nextChar && chr !== prevChar;
  });
};

console.log(nonRepeatChar("aabbooooofffkkccjjdddTTTs"));
