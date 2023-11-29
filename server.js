// Intital connection
const inquirer = require("inquirer");
const db = require("./db");

// User input
async function mainMenu() {
  const answer = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    },
  ]);

// Responses to user input
  console.log(answer);
  try {
    switch (answer.action) {
      case "View all departments":
        await getAllDepartments();
        break;
      case "View all roles":
        await getAllRoles();
        break;
      case "View all employees":
        await getAllEmployees();
        break;
      case "Add a department":
        await promptForNewDepartment();
        break;
      case "Add a role":
        await promptForNewRole();
        break;
      case "Add an employee":
        await promptForNewEmployee();
      case "Update an employee role":
        await promptForEmployeeRoleUpdate();
        break;
      case "Exit":
        console.log("Exiting application");
        db.connection.end();
        break;
      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
  } catch (error) {
    console.error("Error:", error);
  }

  mainMenu();
}

// Calls functions from db
async function getAllDepartments() {
  const [departments] = await db.getAllDepartments();
  console.table(departments);
}

async function getAllRoles() {
  const [roles] = await db.getAllRoles();
  console.table(roles);
}

async function getAllEmployees() {
  const [employees] = await db.getAllEmployees();
  console.table(employees);
}

async function promptForNewDepartment() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the new department?",
    },
  ]);

  await addDepartment(answers.departmentName);
}

async function addDepartment(departmentName) {
  const [department] = await db.addDepartment(departmentName);
  console.log(`Added new department: ${departmentName}`);
}

async function promptForNewRole() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the new role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for the new role?",
    },
    {
      type: "input",
      name: "departmentId",
      message: "What is the department ID for the new role?",
    },
  ]);

  await addRole(answers.title, answers.salary, answers.departmentId);
}

async function addRole(title, salary, departmentId) {
  const [role] = await db.addRole(title, salary, departmentId);
  console.log(`Added new role: ${title}`);
}

async function promptForNewEmployee() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "roleId",
      message: "What is the role ID for the employee?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager ID for the employee? (Enter for none)",
      default: null, // Allows for null manager ID
    },
  ]);

  await addEmployee(
    answers.firstName,
    answers.lastName,
    answers.roleId,
    answers.managerId
  );
}

async function addEmployee(firstName, lastName, roleId, managerId) {
  const [employee] = await db.addEmployee(
    firstName,
    lastName,
    roleId,
    managerId
  );
  console.log(`Added new employee: ${firstName} ${lastName}`);
}

async function promptForEmployeeRoleUpdate() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "employeeId",
      message: "What is the ID of the employee whose role you want to update?",
    },
    {
      type: "input",
      name: "newRoleId",
      message: "What is the new role ID for this employee?",
    },
  ]);

  await updateEmployeeRole(answers.employeeId, answers.newRoleId);
}

async function updateEmployeeRole(employeeId, newRoleId) {
  const [updateInfo] = await db.updateEmployeeRole(employeeId, newRoleId);
  console.log(
    `Updated employee's role. Employee ID: ${employeeId}, New Role ID: ${newRoleId}`
  );
}

// Runs function at start
mainMenu();
