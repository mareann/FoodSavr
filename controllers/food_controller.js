var db = require("../models")
var path = require("path");

module.exports = function(app) {

// Get all food donations from the FoodDonations table and display in index.handlebars
app.get("/", function(req, res) {
  db.FoodDonations.findAll({}).then(function(foodObject) {

    var foodObject = {
      FoodDonations: foodObject
    };
    res.render("index", foodObject);
  });
});

  // route loads donor sign up form
  app.get("/donors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/donors.html"));
  });

  // route loads charity sign up form
  app.get("/charity", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/charity.html"));
  });

  // route loads about page
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

// Get all donor info from DonorInfos table and display in donor.handlebars file
app.get("/donor", function(req,res) {
  db.DonorInfo.findAll({}).then(function(donorObject) {

    var donorObject = {
      DonorInfos: donorObject
    };
    res.render("donor", donorObject);
  });
});

// Get all charity info from the CharityInfos table and display in charity.handlebars file
app.get("/charities", function(req,res) {
  db.CharityInfo.findAll({}).then(function(charityObject) {

    var charityObject = {
      CharityInfos: charityObject
    };
    res.render("charities", charityObject);
  });
});

// Post new food donation to the FoodDonations Table
app.post("/api/donations", function(req, res) {

  db.FoodDonations.create({
    foodTypeId: req.body.foodTypeId,
    foodImageUrl: req.body.foodImageUrl,
    donorId: req.body.donorId,
    donorLocation: req.body.donorLocation,
    donorComments: req.body.donorComments,
    availableBegTime: req.body.availableBegTime,
    availableEndTime: req.body.availableEndTime,
    charityId: req.body.charityId,
    distanceToCharity: req.body.distanceToCharity
  })
  .then(function(dbDonation) {
    res.json(dbDonation);
  });
});

// Create a new charity to the CharityInfos table
app.post("/api/charity", function(req, res) {

  db.CharityInfo.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    contact: req.body.contact,
    taxNumber: req.body.taxNumber,
    PreferredFoodTypeId: req.body.PreferredFoodTypeId,
    email: req.body.email,
    mobile: req.body.mobile,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    contactMobileFlag: req.body.contactMobileFlag,
    contactEmailFlag: req.body.contactEmailFlag,
    contactTwitterFlag: req.body.contactTwitterFlag,
    contactInstagramFlag: req.body.contactInstagramFlag,
    username: req.body.username,
    password: req.body.password
  })
  .then(function(dbCharity) {
    res.json(dbCharity);
  });
});

// Create a new donor to the DonorInfos table
app.post("/api/donor", function(req, res) {

  db.DonorInfo.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    contact: req.body.contact,
    donorTypeId: req.body.donorTypeId,
    foodTypeId: req.body.foodTypeId,
    email: req.body.email,
    mobile: req.body.mobile,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    contactMobileFlag: req.body.contactMobileFlag,
    contactEmailFlag: req.body.contactEmailFlag,
    contactTwitterFlag: req.body.contactTwitterFlag,
    contactInstagramFlag: req.body.contactInstagramFlag,
    username: req.body.username,
    password: req.body.password
  })
  .then(function(dbDonor) {
    res.json(dbDonor);
  });
});

// Update food donation status to pickedup (Column called CharityPickedUp in FoodDonations Table)
app.put("/api/donations/:id", function(req, res) {

  db.FoodDonations.update({
    CharityPickedUpFlag: req.body.charityPickedUpFlag
  }, {
    where: {
      id: req.params.id
    }
}).then(function(dbDonation) {
  res.json(dbDonation);
  });
});

// Delete food donation after it has been claimed
app.delete("/api/donations/:id", function(req, res) {
  
  db.FoodDonations.destroy({
    CharityPickedUpFlag: req.body.charityPickedUpFlag
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(dbDonation) {
    res.json(dbDonation);
    });
  });
};