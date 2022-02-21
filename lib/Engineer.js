// imports employee class that has the name, id, email, and role.
const Employee = require("./Employee");

// adds an engineer to employee class
class Engineer extends Employee{
    constructor(name, id, email, github){
        // calls parent constructor and adds the github info to its arguments/parameters
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

// exports engineer info to the index.js
module.exports = Engineer;