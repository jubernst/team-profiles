const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("getName method", () => {
    it("returns the name as a string", () => {
      const name = "Julia";
      const employee = new Employee("Julia", "1234", "email");
      expect(employee.getName()).toBe(name);
      expect(typeof employee.getName()).toBe("string");
    });
  });

  describe("getID method", () => {
    it("returns the id as a number", () => {
      const id = 1234;
      const employee = new Employee("Julia", "1234", "email");
      expect(employee.getId()).toBe(id);
      expect(typeof employee.getId()).toBe("number");
    });
  });

  describe("getEmail method", () => {
    it("returns the email", () => {
      const email = "email";
      const employee = new Employee("Julia", "1234", "email");
      expect(employee.getEmail()).toBe(email);
    });
  });

  describe("getRole method", () => {
    it("returns Employee if no role has been specified", () => {
      const employee = new Employee("Julia", "1234", "email");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
