// extends Employee
// also has {school, getSchool(), and getRole() returns Intern
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}