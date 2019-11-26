var express = require("express");

var router = express.Router();


var cat = require("../models/hotdog.js");
//in the index the page just displays the hotdogs on the page 
router.get("/", function(req, res) {
    hotdog.all(function(data) {
      var hbsObject = {
        hotdog: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  //this posts the hotdog that has been eaten 
  router.post("/api/hotdog", function(req, res) {
    hotdog.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
//this is what holds whether or not the hotdog has been 
  router.put("/api/hotdog/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("status", status);
  //updates the uneaten to the eaten 
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
  module.exports = router;
