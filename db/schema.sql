-- Use your database
-- REPLACE 'your_database_name' with your actual database name
USE employeeTracker;

-- Department Table
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- Role Table
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2), -- assuming maximum salary 99999999.99
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee Table
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id) -- Self-referencing foreign key for manager
);
