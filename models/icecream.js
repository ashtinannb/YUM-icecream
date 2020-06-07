var orm = require("../config/orm.js");

var icecream = {
  all: function(cb) {
    orm.all("icecream", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("icecream", [
      "icecream_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("icecream", {
      devoured: true
    }, condition, cb);
  },
  //    //delete icecream
  //    deleteOne: function(condition, cb) {
  //     orm.deleteOne('icecream', condition, function(res) {
  //         cb(res);
  //     });
  // }

};

module.exports = icecream;