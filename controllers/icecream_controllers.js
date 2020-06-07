var express = require("express");

var router = express.Router();
var icecream = require("../models/icecream.js");


router.get("/", function(req, res) {
  res.redirect("/icecream");
});

router.get("/icecream", function(req, res) {
  icecream.all(function(icecreamData) {
    res.render("index", { icecream_data: icecreamData });
  });
});

router.post("/icecream/create", function(req, res) {
  icecream.create(req.body.icecream_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});


router.put("/icecream/:id", function(req, res) {
  icecream.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

//remove icecream
router.delete("/icecream/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  icecream.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
          //if the id does not exist, return 404
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

 
module.exports = router;