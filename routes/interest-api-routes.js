// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {
  
//   // GET route for getting all of the posts
//   app.get("/api/interests", function(req, res) {
//     var query = {};
//     if (req.query.user_id) {
//       query.UserId = req.query.user_id;
//     }
//     db.Interest.findAll({
//       where: query
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // Get rotue for retrieving a single post
//   app.get("/api/interests/:id", function(req, res) {
//     db.Interest.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       console.log(dbPost);
//       res.json(dbPost);
//     });
//   });

//   // POST route for saving a new post
//   app.post("/api/new", function(req, res) {
//     // Take the request...
//     var interest = req.body;

//     // Create a routeName

//     // Using a RegEx Pattern to remove spaces from character.name
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     var routeName = character.name.replace(/\s+/g, "").toLowerCase();

//     // Then add the character to the database using sequelize
//     Interest.create({
//       routeName: routeName,
//       name: character.name,
//       role: character.role,
//       age: character.age,
//       forcePoints: character.forcePoints
//     }).then(function(result) {
//       // Result here would be the newly created character
//       res.end();
//     });
//   });
// };

//   // DELETE route for deleting posts
//   app.delete("/api/interests/:id", function(req, res) {
//     db.Interest.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // PUT route for updating posts
//   app.put("/api/interests", function(req, res) {
//     db.Interest.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
}