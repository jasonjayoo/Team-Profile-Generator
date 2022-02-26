// references Engineer constructor class
const Engineer = require("../lib/Engineer");

// creates engineer object
test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Jason Yoo",
    222,
    "jasonjayoo@outlook.com",
    "jasonjayoo"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test("gets engineer github value", () => {
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

// gets role from getRole()
test("gets role of employee", () => {
  const engineer = new Engineer(
    "Jason Yoo",
    222,
    "jasonjayoo@outlook.com",
    "jasonjayoo"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
