// imports employee class that has the name, id, email, and role.
const Employee = require("./Employee");

// adds the manager to employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calls parent constructor and adds the office number info to its arguments/parameters
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

// exports manager info to the index.js
module.exports = Manager;
