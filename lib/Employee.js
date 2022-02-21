// ties in all three employee classes - Manager, Engineer, and Intern.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// for all employee names
    getName(){
        return this.name;
    }
// for all employee id's
    getId(){
        return this.id;
    }
// for all employee emails
    getEmail(){
        return this.email;
    }
// for all employee's job title/role
    getRole(){
        return "Employee";
    }
}
// exports to all three classes, ie:Manager, Engineer, Intern.
module.exports = Employee;