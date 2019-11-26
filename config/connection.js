var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("u7jvolrozed9704e", "qzawwj5tooapigbp", "bn1f4ncqx53godbx", {
  host: "localjw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	host",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
