// These are the required packages needed to run this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generate = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array to save all the members of the team
const employees = [];

//questions prompt for the manager
function managerQuestions() {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the team manager's name?",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Must include manager's name to proceed");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the manager's employee ID?",
          name: "id",
          validate: (idInput) => {
            if (isNaN(idInput)) {
              console.log("Please enter the manager's employee ID to proceed");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the manager's email address?",
          name: "email",
          validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter an valid email address");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the manager's office number?",
          name: "officeNumber",
          validate: (officeNumberInput) => {
            if (isNaN(officeNumberInput)) {
              console.log("Please enter an office number to proceed");
              return false;
            } else {
              return true;
            }

// use below if an office phone number is wanted and not an office number

            // if (
            //   officeNumberInput.match(
            //     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            //   )
            // ) {
            //   return true;
            // } else {
            //   return "Please enter a valid phone number";
            // }

          },
        },
      ])
      // using the promise .then to adopt new manager info and pushes new manager info to the employees array then calls the teamChoice function to ask user if they want to add more employees or finish.
      .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        employees.push(manager);
        teamChoice();
      })
  );
}
// calls managerQuestion function
managerQuestions();

// after manager info is input by user, they are prompted with choices to add more employees or finish
function teamChoice() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select a team member or choose to create your team.",
        name: "choice",
        choices: ["Engineer", "Intern", "Exit and build my team!"],
      },
    ])
    .then(function (answer) {
      switch (answer.choice) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        default:
          buildTeam();
      }
    });
}

// question prompts for engineer
function engineerQuestions() {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Must include the engineer's name to proceed");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the engineer's employee ID?",
          name: "id",
          validate: (idInput) => {
            if (isNaN(idInput)) {
              console.log("Please enter the engineer's employee ID to proceed");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "email",
          validate: (email) => {
            // regex validator for email
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter an valid email address");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the engineer's github username?",
          name: "github",
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log(
                "Must include engineer's github information to proceed"
              );
              return false;
            }
          },
        },
      ])
      // works the same a manager promise explained above
      .then((engineerInput) => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        teamChoice();
      })
  );
}

// Question prompts for intern
function internQuestions() {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Must include interns name to proceed");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the intern's employee ID?",
          name: "id",
          validate: (idInput) => {
            if (isNaN(idInput)) {
              console.log("Please enter the intern's employee ID to proceed");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "email",
          validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter an valid email address");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the name of the intern's school?",
          name: "school",
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Must include school name to proceed");
              return false;
            }
          },
        },
      ])
      // works the same a manager promise explained above
      .then((internInput) => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        teamChoice();
      })
  );
}

// function to send obtained employee info to generateHTML file in the dist folder in order to generate an index.html file with the users employee inputs.
function buildTeam() {
  fs.writeFileSync(
    path.join(path.resolve(__dirname, "dist"), "index.html"),
    generate(employees),
    "utf-8"
  );
}
