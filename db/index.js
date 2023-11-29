const connection = require("./connection");

// Creates a class for the database
class DB {
  constructor(connection) {
    this.connection = connection;
  }

// functions to be called by user input
  getAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  addDepartment(departmentName) {
    return this.connection
      .promise()
      .query("INSERT INTO department (name) VALUES (?)", [departmentName]);
  }

  getAllEmployees() {
    return this.connection
      .promise()
      .query(
        'SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, " ", m.last_name) AS manager ' +
          "FROM employee e " +
          "LEFT JOIN role r ON e.role_id = r.id " +
          "LEFT JOIN department d ON r.department_id = d.id " +
          "LEFT JOIN employee m ON e.manager_id = m.id"
      );
  }

  addEmployee(firstName, lastName, roleId, managerId) {
    return this.connection
      .promise()
      .query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [firstName, lastName, roleId, managerId]
      );
  }

  updateEmployeeRole(employeeId, newRoleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        newRoleId,
        employeeId,
      ]);
  }

  getAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT r.id, r.title, d.name AS department, r.salary " +
          "FROM role r " +
          "JOIN department d ON r.department_id = d.id"
      );
  }

  addRole(title, salary, departmentId) {
    return this.connection
      .promise()
      .query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [title, salary, departmentId]
      );
  }
}

// Exports the connection
module.exports = new DB(connection);
