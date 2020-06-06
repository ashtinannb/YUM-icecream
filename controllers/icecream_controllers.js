var express = require("express");

var router = express.Router();
var burger = require("../models/icecream.js");


router.get("/", function(req, res) {
  res.redirect("/icecream");
});

router.get("/icecream", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  icecream.all(function(icecreamData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { icecream_data: icecreamData });
  });
});

// post route -> back to index
router.post("/icecream/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  icecream.create(req.body.icecream_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/icecream/:id", function(req, res) {
  icecream.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response 
    res.sendStatus(200);
  });
});

module.exports = router;