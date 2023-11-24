-- Use your database
USE employeeTracker;

-- Inserting into department
INSERT INTO department (name)
VALUES 
('Engineering'),
('Human Resources'),
('Marketing'),
('Sales');

-- Inserting into role
-- Note: The department_ids are assumed based on the insertion order above.
INSERT INTO role (title, salary, department_id)
VALUES 
('Software Engineer', 90000.00, 1),
('Systems Analyst', 75000.00, 1),
('HR Manager', 70000.00, 2),
('Recruiter', 45000.00, 2),
('Marketing Coordinator', 60000.00, 3),
('Sales Representative', 55000.00, 4);

-- Inserting into employee
-- Note: The role_ids are assumed based on the insertion order above.
-- The manager_id is NULL where there is no manager or self-referencing yet.
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, NULL), -- Assuming John Doe is the top manager (CEO)
('Jane', 'Smith', 2, 1),  -- Reporting to John Doe
('Emily', 'Jones', 3, 1), -- Reporting to John Doe
('Michael', 'Brown', 4, 3), -- Reporting to Emily Jones
('David', 'Davis', 5, 1), -- Reporting to John Doe
('Sarah', 'Wilson', 6, 5); -- Reporting to David Davis

-- Remember to replace 'your_database_name' with the actual name of your database.
