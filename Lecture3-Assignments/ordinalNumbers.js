// Assignment 3.13: Ordinal Numbers

const competitors = ["Julia", "Mark", "Spencer", "Ann", "John", "Joe"];

function nth(n) {
  return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
}

function createSentence() {
  for (let i = 0; i < competitors.length; i++) {
    const sentence = `${i + 1}${nth(i + 1)} competitor was ${competitors[i]}`;
    console.log(sentence);
  }
}
createSentence();
