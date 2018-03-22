var db = require("../models");
console.log("donors-route: app.get /api/donors");

module.exports = function(app) {
  app.get("/api/donors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
console.log("donors-route: app.get /api/donors");
    db.donorInfos.findAll({
      //include: [db.Post]
    }).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });

  app.get("/api/donors/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.donorInfos.findOne({
      where: {
        id: req.params.id
      }//,
      //include: [db.Post]
    }).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });

  app.post("/api/donors", function(req, res) {
    db.donorInfos.create(req.body).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });

  app.delete("/api/donors/:id", function(req, res) {
    db.donorInfos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });

};
