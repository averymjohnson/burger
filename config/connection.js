var mysql = require('mysql');

var connection = mysql.createConnection({

	port: 3306,
	host: "localhost",
	user: "root",
	password:"2203",
	database: "burgers_db"

});

connection.connect(function(err){
	console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;