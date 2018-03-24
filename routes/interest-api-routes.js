// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/interests", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Interest.findAll({
      where: query
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/interests/:id", function(req, res) {
    db.Interest.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/interests", function(req, res) {
    db.Interest.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/interests/:id", function(req, res) {
    db.Interest.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/interests", function(req, res) {
    db.Interest.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
