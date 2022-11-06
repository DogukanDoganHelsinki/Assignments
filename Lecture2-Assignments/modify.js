// Assignment 2.19: Modify case

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });
const value = prompt("Do you want it lower or upper? ");
const sentence = prompt("What is your sentence? ");

function modifyTheSentence(value, sentence) {
  if (value === "lower") {
    console.log(sentence.toLowerCase());
  } else if (value === "upper") {
    console.log(sentence.toUpperCase());
  } else {
    console.log("Error");
    return;
  }
}

modifyTheSentence(value, sentence);
