// imports employee class that has the name, id, email, and role.
const Employee = require("./Employee");

// adds an intern to employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    // calls parent constructor and adds the school info to its arguments/parameters
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// exports intern info to the index.js
module.exports = Intern;
