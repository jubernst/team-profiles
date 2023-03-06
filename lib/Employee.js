// Employee class
// {name, id, email, getName(), getId(), getEmail(), getRole()-returns Employee}
// other classes extend Employee
class Employee {
  constructor(name, id, email, role) {
    (this.name = name),
      (this.id = id),
      (this.email = email),
      (this.role = role || "Employee");
  }

  getName() {
    return this.name;
  }

  getId() {
    return parseInt(this.id);
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
