// connection.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',  // Your database host, usually localhost
  port: 3306,      // Your database port, 3306 is the default for MySQL
  user: 'root',  // Your database username
  password: 'econ388BYU',  // Your database password
  database: 'employeeTracker'  // Your database name
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});


module.exports = connection;
