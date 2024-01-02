const connection = require("./connection");

// Creates a class for the database
class DB {
  constructor(connection) {
    this.connection = connection;
  }

// functions to be called by user input
  // Method to retrieve all departments from the database
  getAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  // Method to add a new department to the database
  addDepartment(departmentName) {
    return this.connection
      .promise()
      .query("INSERT INTO department (name) VALUES (?)", [departmentName]);
  }

  // Method to retrieve all employees along with their details
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

  // Method to add a new employee to the database
  addEmployee(firstName, lastName, roleId, managerId) {
    return this.connection
      .promise()
      .query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [firstName, lastName, roleId, managerId]
      );
  }

  // Method to update an employee's role
  updateEmployeeRole(employeeId, newRoleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        newRoleId,
        employeeId,
      ]);
  }

  // Method to retrieve all roles from the database
  getAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT r.id, r.title, d.name AS department, r.salary " +
          "FROM role r " +
          "JOIN department d ON r.department_id = d.id"
      );
  }

  // Method to add a new role to the database
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
