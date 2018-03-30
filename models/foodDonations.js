module.exports = function(sequelize, DataTypes) {

  var FoodDonations = sequelize.define("FoodDonations", {
    // id from foodTypes table
    foodTypeId:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    foodImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // id from donorInfo table
    donorId: {
      type: DataTypes.INTEGER
    },
    donorLocation:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    donorComments: {
      type: DataTypes.STRING
    },
    availableBegTime: {
      type: DataTypes.STRING
    },
    availableEndTime: {
      type: DataTypes.STRING
    },
    charityId: {
      type: DataTypes.INTEGER
    },
    charityPickedUpFlag: {
      type: DataTypes.BOOLEAN
      
    },
    distanceToCharity: {
      type: DataTypes.FLOAT
    }
  },
     {
      timestamps: false
    }

  );

  return FoodDonations;
};
