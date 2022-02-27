// references Intern constructor class
const Intern = require("../lib/Intern");

// creates intern object
describe("Intern", () => {
  describe("Object", () => {
    it("should create an Intern object", () => {
      const intern = new Intern(
        "Jason Yoo",
        222,
        "jasonjayoo@outlook.com",
        "UCI"
      );

      expect(intern.school).toEqual(expect.any(String));
    });
  });

  // gets school from getSchool()
  describe("School", () => {
    test("gets employee school", () => {
      const intern = new Intern(
        "Jason Yoo",
        222,
        "jasonjayoo@outlook.com",
        "UCI"
      );

      expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
      );
    });
  });

  // gets role from getRole()
  describe("Role", () => {
    test("gets role of employee", () => {
      const intern = new Intern(
        "Jason Yoo",
        222,
        "jasonjayoo@outlook.com",
        "UCI"
      );

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
