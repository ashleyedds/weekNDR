// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var middleware = require('../config/middleware/isAuthenticated');
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.get("/api/testBigBudget", middleware, function(req,res){
      
    db.BigBudget.findAll({
        where:{
            PersonId: req.user.id
        },
        include:[{
          model: db.Person
        }]
    }).then(function(person){
      res.json(person)
      console.log(person);

    })
  })

  app.get("/api/bigBudget", function(req, res) {
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
