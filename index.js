const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generate = require("./src/generateHTML");


const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
// const { isNull } = require("util");

//array to save all the members of the team
const employees = [];

//question set for an engineer team member
function managerQuestions(){
  return inquirer.prompt([
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
        //   debug for null or blank
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
      },
    },
  ])
  .then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    employees.push(manager); 
    // console.log(manager); 
    teamChoice()
  })
};

managerQuestions();


function teamChoice (){
    inquirer.prompt([
        {
            type: "list",
            message: "Select a team member or choose to create your team.",
            name: "choice",
            choices: ["Engineer","Intern","Exit and build my team!"]
        }
    ]).then(function(answer){
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
    })
};

function engineerQuestions (){
    return inquirer.prompt([
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
              console.log("Must include engineer's github information to proceed");
              return false;
            }
        },
      },
    ])
    .then(engineerInput => {
      const  { name, id, email, github } = engineerInput; 
      const engineer = new Engineer (name, id, email, github);
  
      employees.push(engineer); 
    //   console.log(engineer); 
      teamChoice()
    })
  };

  function internQuestions (){
    return inquirer.prompt([
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
    .then(internInput => {
      const  { name, id, email, school } = internInput; 
      const intern = new Intern (name, id, email, school);
  
      employees.push(intern); 
    //   console.log(intern); 
      teamChoice()
    })
  };

  function buildTeam() {
      fs.writeFileSync(path.join(path.resolve(__dirname, "dist"), "index.html"), generate(employees), "utf-8" )
  };