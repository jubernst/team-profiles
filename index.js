const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createHTML = require("./src/html");
const {
  createManagerCards,
  createEngineerCards,
  createInternCards,
} = require("./src/cards");

const index = "./dist/index.html";

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
  {
    type: "loop",
    name: "employees",
    message: "Would you like to add another employee?",
    questions: [
      {
        type: "list",
        name: "role",
        message: "What role would you like to add next?",
        options: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the employee's github username:",
        when(answers) {
          return answers.role === "Engineer";
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the employee's school:",
        when(answers) {
          return answers.role === "Intern";
        },
      },
    ],
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    const employees = answers.employees;
    const engineerList = [];
    const internList = [];

    for (var e of employees) {
      if (e.role === "Engineer") {
        // create an Engineer for them and render their card
        let engineer = new Engineer(e.name, e.id, e.email, e.github);
        engineerList.push(engineer);
      } else if (e.role === "Intern") {
        // create an Intern for them and render the card
        let intern = new Intern(e.name, e.id, e.email, e.school);
        internList.push(intern);
      }
    }

    const managerCard = createManagerCards(manager);
    const engineerCards = createEngineerCards(engineerList);
    const internCards = createInternCards(internList);
    const html = createHTML(managerCard, engineerCards, internCards);

    fs.writeFile(index, html, (err) =>
      err ? console.error(err) : console.log("HTML created!")
    );
  });
}

init();
