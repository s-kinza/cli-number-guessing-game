#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to CodeWithKinza - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()* 5 + 1);

const answer = await inquirer.prompt(
    [
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Enter your Guest Number(number limit from 1 to 5:)",
        },
    ]
);

if (answer.userGuessedNumber === randomNumber){
console.log("Congratulation ! you guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}