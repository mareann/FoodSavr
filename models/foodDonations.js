module.exports = function(sequelize, DataTypes) {

  var FoodDonations = sequelize.define("FoodDonations", {
    foodTypeId:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    foodImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
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
