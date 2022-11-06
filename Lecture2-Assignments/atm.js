// Assignment 2.17 ATM

"use-strict";

const prompt = require("prompt-sync")({ sigint: true });

const balance = prompt("Check your balance? ");

function usingAtm(balance) {
  if (balance === "no") {
    console.log("Have a nice day");
    return;
  } else if (balance === "yes") {
    const isActive = prompt("Is account active and balance > 0 ? ");
    {
      if (isActive === "yes") {
        console.log("Print out balance");
        return;
      } else if (isActive === "no") {
        const isNotActive = prompt("Is account not active ? ");
        {
          if (isNotActive === "yes") {
            console.log("Your account is not active");
            return;
          } else if (isNotActive === "no") {
            const checkBalance = prompt("Is balance = 0 ? ");
            {
              if (checkBalance === "yes") {
                console.log("Your account is empty");
                return;
              } else if (checkBalance === "no") {
                console.log("Your balance is negative");
                return;
              }
            }
          }
        }
      }
    }
  } else {
    console.log("Error");
  }
}

usingAtm(balance);
