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

  // GET route for getting all of the bigBudgets
  app.get("/api/bigBudgets", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.BigBudget.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbBigBudget) {
      res.json(dbBigBudget);
    });
  });

  // Get rotue for retrieving a single bigBudgets
  app.get("/api/bigBudgets/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.BigBudget.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbBigBudget) {
      res.json(dbBigBudget);
    });
  });

  // POST route for saving a new bigBudgets
  app.post("/api/bigBudgets", function(req, res) {
    db.BigBudget.create(req.body).then(function(dbBigBudget) {
      res.json(dbBigBudget);
    });
  });

  // DELETE route for deleting bigBudgets
  app.delete("/api/bigBudgets/:id", function(req, res) {
    db.BigBudget.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBigBudget) {
      res.json(dbBigBudget);
    });
  });

  // PUT route for updating bigBudgets
  app.put("/api/bigBudgets", function(req, res) {
    db.BigBudget.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBigBudget) {
      res.json(dbBigBudget);
    });
  });
};
