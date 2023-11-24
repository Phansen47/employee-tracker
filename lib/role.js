// Role.js
const connection = require('../db/connection');

class Role {
  constructor() {
    // properties specific to the role can be initialized here
  }

  // Define as an asynchronous function
  async getAllRoles() {
    try {
      const result = await connection.query(
        'SELECT r.id, r.title, d.name AS department, r.salary ' +
        'FROM role r ' +
        'JOIN department d ON r.department_id = d.id'
      );
      return result;
    } catch (err) {
      console.error('Error in getAllRoles:', err);
      throw err;
    }
  }

  // Define as an asynchronous function
  async addRole(title, salary, departmentId) {
    try {
      const result = await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
                                            [title, salary, departmentId]);
      return result;
    } catch (err) {
      console.error('Error in addRole:', err);
      throw err;
    }
  }
}

module.exports = Role;
