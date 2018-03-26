var db = require("../models")
var path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
  db.foodTypes.findAll({}).then(function(foodObject) {

    var foodObject = {
      foodType: foodTypeObject
    };
    res.render("index", foodObject);
  });
});

// Post request to add the new burger
app.post("/api/donations", function(req, res) {

  db.FoodDonations.create({
    foodTypeId: req.body.foodTypeId,
    foodImageURL: req.body.foodImageURL,
    donorLocation: req.body.donorLocation,
    donorComments: req.body.comments,
    donorPickUpBegTime: req.body.donorPickUpBegTime,
    donorPickUpEndTime: req.body.donorPickUpEndTime,
    CharityPickedUp: req.body.CharityPickedUp
  })
  .then(function(dbDonation) {
    res.json(dbDonation);
  });
});

app.put("/api/donations/:id", function(req, res) {

  db.FoodDonations.update({
    CharityPickedUp req.body.PickedUp
  }, {
    where: {
      id: req.params.id
    }
}).then(function(dbDonation) {
  res.json(dbDonation);
  });
});


};