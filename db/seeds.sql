USE employeeTracker;

-- Creates dummy data

INSERT INTO department (name)
VALUES 
('Engineering'),
('Human Resources'),
('Marketing'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Software Engineer', 90000.00, 1),
('Systems Analyst', 75000.00, 1),
('HR Manager', 70000.00, 2),
('Recruiter', 45000.00, 2),
('Marketing Coordinator', 60000.00, 3),
('Sales Representative', 55000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emily', 'Jones', 3, 1),
('Michael', 'Brown', 4, 3),
('David', 'Davis', 5, 1),
('Sarah', 'Wilson', 6, 5);
