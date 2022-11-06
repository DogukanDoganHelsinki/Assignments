// Assignment 4.7: Likes

const array = ["samet", "dogukan", "ahmet", "seval", "belek"];

const like = (array) => {
  if (array.length === 0) {
    return "no one likes this";
  } else if (array.length === 1) {
    return `${array[0]} likes this`;
  } else if (array.length === 2) {
    return `${array[0]} and ${array[1]} like this`;
  } else if (array.length === 3) {
    return `${array[0]}, ${array[1]} and ${array[2]} like this`;
  } else if (array.length >= 4) {
    return `${array[0]}, ${array[1]} and ${array.length - 2} others `;
  }
};

console.log(like(array));
