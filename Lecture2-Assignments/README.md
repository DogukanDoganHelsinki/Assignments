# Lecture2  

This README.md is created for Assignment 2.11: Creating a Git Repository and it has the answer to assignments of lecture2 from 2.3-2.11.

Assignment 2.3: Working with Arrays

const arr = [
  "banaani",
  "omena",
  "mandariini",
  "appelsiini",
  "kurkku",
  "tomaatti",
  "peruna",
];

console.log(arr[2], arr[4], arr.length);
arr.sort();
console.log(arr);
arr.push("sipuli");
console.log(arr)
arr.shift();
console.log(arr);
arr.forEach((x) => {
  console.log(x);
});

Assignment 2.4: Using the For Loop

for (let index = 0; index < 1001; index += 100) {
  console.log(index);
}

for (let index = 1; index <= 129; index *= 2) {
  console.log(index);
}

for (let index = 3; index <= 15; index += 3) {
  console.log(index);
}

for (let number = 1; number < 5; number += 0.34) {
  console.log(number);
}

for (let number = 1; number <= 3; number++) {
  for (let number = 0; number < 5; number++) {
    console.log(number);
  }
}

Assignment 2.6: Sum of Some Ints

let sum = 0;

for (let n = 0; n <= 17; n++) {
  if (n % 3 === 0 || n % 5 === 0) {
    sum += n;
  }
}

console.log(sum);

Assignment 2.7: FizzBuzz

for (let n = 0; n <= 100; n++) {
  const divisibleBy3 = n % 3 === 0;
  const divisibleBy5 = n % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    console.log("FizzBuzz");
  } else if (divisibleBy3) {
    console.log("Fizz");
  } else if (divisibleBy5) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}

Assignment 2.8: Triangles

const n = 4;

// Level 1
for (let i = 1; i <= n; i++) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += "&";
  }

  console.log(str);
}

console.log();

// Level 2
for (let i = 1; i <= n; i++) {
  const symbolCount = i * 2 - 1;
  const spaceCount = n - i;

  let str = "";

  for (let space = 0; space < spaceCount; space++) {
    str += " ";
  }

  for (let symbol = 0; symbol < symbolCount; symbol++) {
    str += "&";
  }

  console.log(str);
}

Assignment 2.9: The Largest Number

const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7];

let largestNumber = Number.NEGATIVE_INFINITY;
let secondLargestNumber = Number.NEGATIVE_INFINITY;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    secondLargestNumber = largestNumber;
    largestNumber = arr[i];
  } else if (arr[i] > secondLargestNumber) {
    secondLargestNumber = arr[i];
  }
}

console.log(largestNumber);
console.log(secondLargestNumber);

Assignment 2.10: Student Grades

const students = [
  { name: "Markku", score: 99 },
  { name: "Karoliina", score: 58 },
  { name: "Susanna", score: 69 },
  { name: "Benjamin", score: 77 },
  { name: "Isak", score: 49 },
  { name: "Liisa", score: 89 },
];

let highestScoringStudent = students[0];
let lowestScoringStudent = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].score > highestScoringStudent.score) {
    highestScoringStudent = students[i];
  } else if (students[i].score < lowestScoringStudent.score) {
    lowestScoringStudent = students[i];
  }
}

console.log(highestScoringStudent);
console.log(lowestScoringStudent);

let averageScore = 0;
let sum = 0;

for (let i = 0; i < students.length; i++) {
  sum += students[i].score;
}

console.log(sum / students.length);

let sum = 0;

students.forEach((student) => {
  sum += student.score;
});

let average = sum / students.length;

students.forEach((student) => {
  if (student.score > average) {
    console.log(student);
  }
});

for (const student of students) {
  if (student.score < 40) {
    student.grade = 1;
  } else if (student.score < 60) {
    student.grade = 2;
  } else if (student.score < 80) {
    student.grade = 2;
  } else if (student.score < 95) {
    student.grade = 2;
  } else {
    student.grade = 5;
  }
}
console.log(students);



