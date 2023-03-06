const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("school property", () => {
    it("has the property school", () => {
      const intern = new Intern(
        "Julia",
        "1234",
        "email",
        "University of Toronto"
      );
      expect(intern).toHaveProperty("school");
    });
  });

  describe("getSchool method", () => {
    it("returns the school", () => {
      const intern = new Intern(
        "Julia",
        "1234",
        "email",
        "University of Toronto"
      );
      expect(intern.getSchool()).toBe("University of Toronto");
    });
  });

  describe("getRole method", () => {
    it("returns Intern", () => {
      const intern = new Intern(
        "Julia",
        "1234",
        "email",
        "University of Toronto"
      );
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
