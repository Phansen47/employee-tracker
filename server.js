// server.js
const inquirer = require('inquirer');
const connection = require('./db/connection');
// You can require other modules you've created here

const Department = require('./lib/department');
const Employee = require('./lib/employee');
const Role = require('./lib/role');
const Queries = require('./lib/queries');

// Initialize instances of your classes
const department = new Department();
const employee = new Employee();
const role = new Role();
const queries = new Queries();

async function mainMenu() {
  try {
    const answer = await inquirer.prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    });

    switch (answer.action) {
      case 'View all departments':
        await department.getAllDepartments(); // Adjust based on actual method names
        break;
      case 'View all roles':
        await role.getAllRoles(); // Adjust based on actual method names
        break;
      case 'View all employees':
        await employee.getAllEmployees(); // Adjust based on actual method names
        break;
      case 'Add a department':
        await department.addDepartment(); // Adjust based on actual method names
        break;
      case 'Add a role':
        await role.addRole(); // Adjust based on actual method names
        break;
      case 'Add an employee':
        await employee.addEmployee(); // Adjust based on actual method names
        break;
      case 'Update an employee role':
        await employee.updateEmployeeRole(); // Adjust based on actual method names
        break;
      case 'Exit':
        console.log('Exiting application');
        connection.end();
        return;
      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }

    // Call mainMenu again to allow for more actions
    await mainMenu();} catch (err) { 
    console.error('Error:', err);
    connection.end();
  }
}

mainMenu();
