// Assignment 2.13: Hello World, part 2
"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const language = prompt(
  "What language would you like to use? Eg. en, fi, tr: "
);

function helloWorld(language) {
  if (language === "en") {
    console.log("Hello world");
  } else if (language === "fi") {
    console.log("Hei maailma");
  } else if (language === "tr") {
    console.log("Merhaba dunya");
  } else {
    console.log("Hello world");
  }
}

helloWorld(language);
