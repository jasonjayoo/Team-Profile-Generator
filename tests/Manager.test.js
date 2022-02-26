// references Manager constructor class
const Manager = require("../lib/Manager");

// creates manager object
test("creates an Manager object", () => {
  const manager = new Manager("Jason Yoo", 222, "jasonjayoo@outlook.com", 2);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Jason Yoo", 222, "jasonjayoo@outlook.com");

  expect(manager.getRole()).toEqual("Manager");
});
