module.exports = function(sequelize, DataTypes) {

//////////////////////////////////////////////////////////////////////////
// foodTypes.js
// Food Types for fooddonations and charity request
// ('All'), ('produce'), ('Italian'), ('Thai'), ('Indian'), ('American'),
// ('French'), ('Mexican'),('Japanese'), ('Middle Eastern'),
// ('Bakery'), ('Coffee Shop'), ('Greek'), ('Other')
//////////////////////////////////////////////////////////////////////////
 
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
/*
  CharityInfo.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
*/
  return FoodTypes;
};
