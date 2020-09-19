var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.UserInfo);
  });

    app.post("/api/username", function(req, res) {
        db.UserInfo.create({
          firstName: req.body.firstName,
        })      
            .then(function() {
            res.redirect(307, "/api/login");
          })
          .catch(function(err) {
            res.status(401).json(err);
          });
      });

      app.get("/api/userinfo_data", function(req, res) {
        db.UserInfo.findAll({
          firstName: req.params.firstName
          })
            .then(function() {
              res.redirect(307, "/login");
            })
            .catch(function(err) {
              res.status(401).json(err);
            });
        });
}
