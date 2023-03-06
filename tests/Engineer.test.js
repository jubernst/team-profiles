const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("github property", () => {
    it("has the property github, which holds a GitHub username", () => {
      const engineer = new Engineer("Julia", "1234", "email", "jubernst");
      expect(engineer).toHaveProperty("github");
    });
  });

  describe("getGithub method", () => {
    it("returns the GitHub username", () => {
      const engineer = new Engineer("Julia", "1234", "email", "jubernst");
      expect(engineer.getGithub()).toBe("jubernst");
    });
  });

  describe("getRole method", () => {
    it("returns Engineer", () => {
      const engineer = new Engineer("Julia", "1234", "email", "jubernst");
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
