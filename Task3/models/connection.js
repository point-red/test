const mysql = require('mysql') // Import mysql

// Make mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username’',
  password: 'password',
  database: 'simpleApi'
})

module.exports = connection; // export connection
