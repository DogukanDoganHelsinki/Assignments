// 1.14

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });
const firstCharacter = prompt("First character : ");
const secondCharacter = prompt("Second character : ");
const sentence = prompt("Your sentence ? ");

function changeCharacters(firstCharacter, secondCharacter, sentence) {
  const result = sentence.replace(firstCharacter, secondCharacter);
  console.log(result);
}

changeCharacters(firstCharacter, secondCharacter, sentence);
