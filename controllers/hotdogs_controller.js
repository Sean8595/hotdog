var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var hotdog = require("../models/hotdog.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  hotdog.all(function(data) {
    var hbsObject = {
      hotdogs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/hotdogs", function(req, res) {
  hotdog.create([
    "name", "sleepy"
  ], [
    req.body.kindof, req.body.eaten
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/hotdogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  hotdog.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/hotdogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  hotdog.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
