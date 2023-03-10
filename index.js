const fs = require("fs");
const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createHTML = require("./src/template");

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
    message: "Add another employee?",
    questions: [
      {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern"],
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
  // need to catch errors so i see where they're being thrown
  inquirer
    .prompt(questions)
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      const employees = answers.employees;
      const engineers = [];
      const interns = [];

      for (var i = 0; i < employees.length; i++) {
        var e = employees[i];
        if (e.role === "Engineer") {
          let engineer = new Engineer(e.name, e.id, e.email, e.github);
          engineers.push(engineer);
        } else if (e.role === "Intern") {
          let intern = new Intern(e.name, e.id, e.email, e.school);
          interns.push(intern);
        }
      }

      const html = createHTML(manager, engineers, interns);

      fs.writeFile(index, html, (err) =>
        err ? console.error(err) : console.log("HTML created!")
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
