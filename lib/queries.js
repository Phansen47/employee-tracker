// Queries.js
// This file could be used for miscellaneous queries that don't fit into the other classes

const connection = require('../db/connection');

class Queries {
  // Define as an asynchronous static method
  static async getAllDepartments(departmentId) {
    try {
      const result = await connection.query(
        'SELECT d.name, SUM(r.salary) AS total_budget ' +
        'FROM employee e ' +
        'JOIN role r ON e.role_id = r.id ' +
        'JOIN department d ON r.department_id = d.id ' +
        'WHERE d.id = ? ' +
        'GROUP BY d.name', 
        departmentId
      );
      return result;
    } catch (err) {
      console.error('Error in getDepartmentBudget:', err);
      throw err;
    }
  }
}

module.exports = Queries;
