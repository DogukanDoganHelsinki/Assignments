// Assignment 4.6: Calculator

function calculator(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator !== "+" || "-" || "*" || "/") {
    console.log("Can't do that!");
  }
}

console.log(calculator("+", 8, 3));
