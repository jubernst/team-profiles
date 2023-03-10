// extends Employee
// also has {officeNumber, and getRole() returns Manager}
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
