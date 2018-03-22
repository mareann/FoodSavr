module.exports = function(sequelize, DataTypes) {
  var FoodTypes = sequelize.define("FoodTypes", {
    // Giving the model a name of type STRING
    //ID:  { 
    //  type: DataTypes.INTEGER//, 
      //autoIncrement: true 
    //},
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
