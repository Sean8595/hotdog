var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "seanmelvin8595",
  database: "hotdog_db"
});
// Update a plan
app.get("/", function(req, res) {
  connection.query("SELECT * FROM hotdog", function(err, data) {
    if (err) throw err;
    res.render("index", { kindof: data });
  });
});
app.put("/api/hotdogs/:kindof", function(req, res) {
  connection.query("UPDATE hotdog_name SET hotdog_name = ? WHERE kindof = ?", [req.body.kindof, req.params.hotdog_name], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// Delete a plan
app.delete("/api/plans/:id", function(req, res) {
  connection.query("DELETE FROM hotdogs WHERE eaten = true", [req.params.eaten], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
