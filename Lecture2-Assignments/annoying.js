// Assignment 2.20: Annoying substring

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });
let sentence = prompt("What is your sentence? ");

const lastIndex = sentence.lastIndexOf(" ");

sentence = sentence.substring(0, lastIndex);

console.log(sentence);
