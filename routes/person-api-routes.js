var db = require("../models");
var passport = require("../config/passport");
var middleware = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
  // app.get("/api/person", function(req, res) {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Person.findAll({
  //     include: [db.Interest]
  //   }).then(function(dbPerson) {
  //     res.json(dbPerson);
  //   });
  // });

  app.get("/api/person/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Person.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Interest]
    }).then(function(dbPerson) {
      res.json(dbPerson);
    });
  });

  app.post("/api/person", function(req, res) {
    db.Person.create(req.body).then(function(dbPerson) {
      res.json(dbPerson);
    });
  });

  app.delete("/api/person/:id", function(req, res) {
    db.Person.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPerson) {
      res.json(dbPerson);
    });
  });

  app.post("/api/interests", function(req, res) {
    console.log(req.body)
    console.log("api interests")
    db.Interest.create(req.body).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });

  app.get("/api/interests", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Interest.findAll({
    }).then(function(dbInterest) {
      res.json(dbInterest);
      console.log("api routes")
    });
  });

};