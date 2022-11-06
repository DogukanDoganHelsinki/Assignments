// Assignment 3.16: Palindrome

function palindrome(text) {
  const arrayOfText = text.split("");
  const middleIndex = Math.ceil(arrayOfText.length / 2 - 1);

  if (middleIndex % 2 === 1) {
    arrayOfText.splice(middleIndex, 1);
  }

  const firstHalf = arrayOfText.splice(0, middleIndex);
  const secondHalf = arrayOfText.splice(-middleIndex).reverse();

  return JSON.stringify(firstHalf) === JSON.stringify(secondHalf)
    ? console.log(`Yes, ${text} is a palindrome`)
    : console.log(`No, ${text} is mot a palindrome`);
}

palindrome("saippuakivikauppias");
