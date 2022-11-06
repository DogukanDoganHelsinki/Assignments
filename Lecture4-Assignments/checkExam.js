// Assignment 4.10: Check the Exam

const correctAnswersArray = ["b", "c", "b", "a"];
const submittedAnswersArray = ["", "a", "a", "c"];

const checkAnswers = (correctAnswersArray, submittedAnswersArray) => {
  let sum = 0;

  if (
    correctAnswersArray.length !== 0 &&
    submittedAnswersArray.length !== 0 &&
    correctAnswersArray.length === submittedAnswersArray.length
  ) {
    const fourPointsArray = correctAnswersArray.filter(
      (value, index) => value === submittedAnswersArray[index]
    );
    sum = fourPointsArray.length * 4;

    const minusPointsArray = correctAnswersArray.filter(
      (value, index) => value !== submittedAnswersArray[index]
    );

    sum = sum + minusPointsArray.length * -1;

    const blankPointsArray = submittedAnswersArray.filter((value) => {
      return value === "";
    });

    sum = sum + blankPointsArray.length;
  }
  if (sum <= 0) {
    console.log("0");
  } else {
    console.log(sum);
  }
};

checkAnswers(correctAnswersArray, submittedAnswersArray);
