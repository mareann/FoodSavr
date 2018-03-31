module.exports = function(sequelize, DataTypes) {
  var PickUplocations = sequelize.define("PickUplocations", {
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
  return PickUplocations;
};
