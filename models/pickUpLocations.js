module.exports = function(sequelize, DataTypes) {
  var PickUplocations = sequelize.define("PickUplocations", {
    // Giving the model a name of type STRING
    //ID:  { 
    //  type: DataTypes.INTEGER//, 
      //autoIncrement: true 
    //},
    donorId:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donorLocation:  {
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
  return PickUplocations;
};
