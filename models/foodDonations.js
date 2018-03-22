module.exports = function(sequelize, DataTypes) {
  var FoodDonations = sequelize.define("FoodDonations", {
    // Giving the model a name of type STRING
    //ID:  { 
    //  type: DataTypes.INTEGER//, 
      //autoIncrement: true 
    //},
    foodTypeId:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foodImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    donorLocation:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    donorComments: {
      type: DataTypes.STRING
    },
    donorPickUpBegTime: {
      type: DataTypes.STRING
    },
    donorPickUpEndTime: {
      type: DataTypes.STRING
    },
    CharityPickedUp: {
      type: DataTypes.BOOLEAN
    }
  },
     {
      timestamps: false
    }

  );
/*
  CharityInfo.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
*/
  return FoodDonations;
};
