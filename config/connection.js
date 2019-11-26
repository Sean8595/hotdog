
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qzawwj5tooapigbp",
  password: "bn1f4ncqx53godbx",
  database: "u7jvolrozed9704e"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;