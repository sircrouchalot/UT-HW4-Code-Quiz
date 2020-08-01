var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/highscores", function (req, res) {
    db.User.findAll({
      order: [
        ['score', 'DESC']
      ]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/highscores", function (req, res) {
      console.log(db.User);
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};
