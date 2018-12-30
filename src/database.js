const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);

    } else {
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;
