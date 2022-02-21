// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Jason Yoo', 222, 'jasonjayoo@outlook.com');

    expect(employee.name).toEqual(expectedResults.any(String));
    expect(employee.id).toEqual(expectedResults.any(Number));
    expect(employee.email).toEqual(expectedResults.any(String));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Jason Yoo', 222, 'jasonjayoo@outlook.com');

    expect(employee.getName()).toEqual(expectedResults.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Jason Yoo', 222, 'jasonjayoo@outlook.com');

    expect(employee.getId()).toEqual(expectedResults.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Jason Yoo', 222, 'jasonjayoo@outlook.com');

    expect(employee.getEmail()).toEqual(expectedResults.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Jason Yoo', 222, 'jasonjayoo@outlook.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

