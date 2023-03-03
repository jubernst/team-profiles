// should ask user which role they are and then ask questions to fill that role's properties

// then when all roles have been asked (delete chosen role from list options each time)

// Access lib and create a card for each file
// use for of
const inquirer = require("inquirer");
const fs = require("fs");

// Shit, questions change based on Employee type
// Set of questions for each emptype
const roles = {
  type: "list",
  name: "role",
  message: "What is your role?",
  options: ["Manager", "Engineer", "Intern"],
};

// basic questions array. add on to them depending on the role?
// a questions array for each role?
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

const managerQuestions = {
  type: "input",
  name: "officeNumber",
  message: "What is your office number?",
};

const engineerQuestions = {
  type: "input",
  name: "github",
  message: "What is your gitHub username?",
};

const internQuestions = {
  type: "input",
  name: "school",
  message: "What school do you attend?",
};

// Function that creates a card based on the data
function writeFile(fileName, data) {
  // I guess we're writing a whole ass HTML file in here
  // Call the card maker to create the cards in for of loop
}

function createCard(data) {}

function init() {
  inquirer.prompt(roles).then((answer) => {
    // based on which role was chosen, call
    switch(answer)
  });
}
