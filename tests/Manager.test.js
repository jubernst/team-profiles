const Manager = require("../lib/Manager");

describe("Manager class", () => {
  // only unique thing is that role should be manager and it has property officeNumber
  describe("officeNumber property", () => {
    it("has the property officeNumber", () => {
      const manager = new Manager("Julia", "1234", "email", "100");
      expect(manager).toHaveProperty("officeNumber");
    });
  });

  describe("getRole method", () => {
    it("returns Manager", () => {
      const manager = new Manager("Julia", "1234", "email", "100");
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
