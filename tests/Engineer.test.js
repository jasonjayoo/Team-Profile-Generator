// references Engineer constructor class
const Engineer = require("../lib/Engineer");

// creates engineer object
describe("Engineer", () => {
  describe("Object", () => {
it("should create an Engineer object", () => {
  const engineer = new Engineer(
    "Jason Yoo",
    222,
    "jasonjayoo@outlook.com",
    "jasonjayoo"
  );

  expect(engineer.github).toEqual(expect.any(String));
});
});
// gets github from getGithub()
describe("Github", () => {
it("should get engineer github value", () => {
  const engineer = new Engineer(
    "Jason Yoo",
    222,
    "jasonjayoo@outlook.com",
    "jasonjayoo"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});
});
// gets role from getRole()
describe("Role", () => {
it("should get role of employee", () => {
  const engineer = new Engineer(
    "Jason Yoo",
    222,
    "jasonjayoo@outlook.com",
    "jasonjayoo"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
});
});