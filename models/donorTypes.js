module.exports = function(sequelize, DataTypes) {
  var DonorTypes = sequelize.define("DonorTypes", {
    foodType:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
     {
      timestamps: false
    }

  );
  return DonorTypes;
};
