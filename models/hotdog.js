var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Hotdog = sequelize.define("hotdog", {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  eaten: Sequelize.BOOLEAN,
});

// Syncs with DB
Hotdog.sync();
// Export the database functions for the controller (catsController.js).
module.exports = Hotdog;
