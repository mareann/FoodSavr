var db = require("../models")
var path = require("path");

module.exports = function(app) {

// Get all food donations from the FoodDonations table
app.get("/", function(req, res) {
  db.FoodDonations.findAll({}).then(function(foodObject) {

    var foodObject = {
      FoodDonations: foodObject
    };
    res.render("index", foodObject);
  });
});

app.get("/donor", function(req,res) {
  db.DonorInfo.findAll({}).then(function(donorObject) {

    var donorObject = {
      DonorInfos: donorObject
    };
    res.render("donor", donorObject);
  })
})

// Get a donor from the list of donors
app.get("/", function(req, res) {
    db.DonorInfo.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });

// Post new food donation to the FoodDonations Table
app.post("/api/donations", function(req, res) {

  db.FoodDonations.create({
    foodTypeId: req.body.foodTypeId,
    foodImageUrl: req.body.foodImageUrl,
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

// Update food donation status to pickedup (Column called CharityPickedUp in table FoodDonations)
app.put("/api/donations/:id", function(req, res) {

  db.FoodDonations.update({
    CharityPickedUp: req.body.PickedUp
  }, {
    where: {
      id: req.params.id
    }
}).then(function(dbDonation) {
  res.json(dbDonation);
  });
});

app.delete("/api/donations/:id", function(req, res) {
  
  db.FoodDonations.destroy({
    CharityPickedUp: req.body.PickedUp
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(dbDonation) {
    res.json(dbDonation);
    });
  });
};