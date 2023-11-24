// Department.js
const connection = require('../db/connection');

class Department {
  constructor() {
    // properties specific to the department can be initialized here
  }

  // Use async keyword to define an asynchronous function
  async getAllDepartments() {
    try {
      // Await the resolution of the promise returned by connection.query
      const result = await connection.query('SELECT * FROM department');
      return result;
    } catch (err) {
      console.error('Error in getAllDepartments:', err);
      throw err;
    }
  }

  // Use async keyword to define an asynchronous function
  async addDepartment(departmentName) {
    try {
      // Await the resolution of the promise returned by connection.query
      const result = await connection.query('INSERT INTO department (name) VALUES (?)', departmentName);
      return result;
    } catch (err) {
      console.error('Error in addDepartment:', err);
      throw err;
    }
  }
}

module.exports = Department;
