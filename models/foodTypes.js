module.exports = function(sequelize, DataTypes) {

 
  var FoodTypes = sequelize.define("FoodTypes", {

    foodType:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
     {
      timestamps: false
    }

  );
  return FoodTypes;
};
