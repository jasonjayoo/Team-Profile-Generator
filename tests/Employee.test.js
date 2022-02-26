// references Employee constructor class
const Employee = require("../lib/Employee");

describe("Employee-Test", () => {
  describe("Employee-Object", () => {
    // creates employee object
    it("should create an employee object", () => {
      const employee = new Employee("Jason Yoo", 222, "jasonjayoo@outlook.com");

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });

  // gets id from getId()
  describe("Employee-Name", () => {
    it("should retrieve employee names", () => {
      const employee = new Employee("Jason Yoo", 222, "jasonjayoo@outlook.com");

      expect(employee.getName()).toEqual(expect.any(String));
    });
  });
  // gets id from getId()
  describe("Employee-ID", () => {
    it("should retrieve employees IDs", () => {
      const employee = new Employee("Jason Yoo", 222, "jasonjayoo@outlook.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });

  // gets emails from getEmail()
  describe("Employee-Email", () => {
    it("should retrieve employee emails", () => {
      const employee = new Employee("Jason Yoo", 222, "jasonjayoo@outlook.com");

      expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
      );
    });
  });

  // gets role from getRole()
  describe("Employee-Role", () => {
    it("should retrieve role of employees", () => {
      const employee = new Employee("Jason Yoo", 222, "jasonjayoo@outlook.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
