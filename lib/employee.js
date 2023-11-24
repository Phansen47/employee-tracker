// Employee.js
const connection = require('../db/connection');

class Employee {
  constructor() {
    // properties specific to the employee can be initialized here
  }

  // Define as an asynchronous function
  async getAllEmployees() {
    try {
      const result = await connection.query(
        'SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, " ", m.last_name) AS manager ' +
        'FROM employee e ' +
        'LEFT JOIN role r ON e.role_id = r.id ' +
        'LEFT JOIN department d ON r.department_id = d.id ' +
        'LEFT JOIN employee m ON e.manager_id = m.id'
      );
      return result;
    } catch (err) {
      console.error('Error in getAllEmployees:', err);
      throw err;
    }
  }

  // Define as an asynchronous function
  async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const result = await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                                            [firstName, lastName, roleId, managerId]);
      return result;
    } catch (err) {
      console.error('Error in addEmployee:', err);
      throw err;
    }
  }

  // Define as an asynchronous function
  async updateEmployeeRole(employeeId, newRoleId) {
    try {
      const result = await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
      return result;
    } catch (err) {
      console.error('Error in updateEmployeeRole:', err);
      throw err;
    }
  }
}

module.exports = Employee;
