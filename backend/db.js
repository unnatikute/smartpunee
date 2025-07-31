const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',   // your MySQL root password
    database: 'smartpune'
});

console.log('✅ MySQL Pool Created!');

module.exports = db;
