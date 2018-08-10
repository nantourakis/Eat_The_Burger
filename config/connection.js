var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
})

// var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err){
    if (err)throw err;
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;
