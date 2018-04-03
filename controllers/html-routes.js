// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var isAuthenticated = require('../config/middleware/isAuthenticated');
// Requiring our custom middleware for checking if a user is logged in

module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/landing.html"));
  });
  // app.get("/dashboard", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  // });

  // index route loads view.html
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/dashboard.html"));
  });


  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // cms route loads cms.html
  app.get("/bigBudget", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bigBudget.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  app.get("/dashboard", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

};
