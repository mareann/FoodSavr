module.exports = function(sequelize, DataTypes) {

  var DonorInfos = sequelize.define("DonorInfos", {

    name:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    address:  {
      type: DataTypes.STRING
    },
    city:  {
      type: DataTypes.STRING
    },
    state:  {
      type: DataTypes.STRING
    },
    zip:  {
      type: DataTypes.INTEGER
    },
    contact:  {
      type: DataTypes.STRING
    },
    donorTypeId: {
      type: DataTypes.INTEGER
    },
    foodTypeId:  {
      type: DataTypes.STRING
    },
    email:  {
      type: DataTypes.STRING
    },
    mobile:  {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    },
    instagram: {
      type: DataTypes.STRING
    },
    contactMobileFlag:  {
      type: DataTypes.BOOLEAN
    },
    contactEmailFlag: {
      type: DataTypes.BOOLEAN
    },  
    contactTwitterFlag: {
      type: DataTypes.BOOLEAN
    },
    contactInstagramFlag:{
      type: DataTypes.BOOLEAN
    },
    username:  {
      type: DataTypes.STRING
    },
    password:  {
      type: DataTypes.STRING
    }
  },
     {
      timestamps: false
    }

  );
  return DonorInfos;
};
