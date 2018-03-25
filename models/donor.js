module.exports = function(sequelize, DataTypes) {
  var DonorInfo = sequelize.define("DonorInfo", {
    // Giving the model a name of type STRING
    //ID:  { 
    //  type: DataTypes.INTEGER//, 
      //autoIncrement: true 
    //},
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
    // id from donorTypes table
    donorType: {
      type: DataTypes.INTEGER
    },
    /*taxNumber:  {
      type: DataTypes.STRING
    },*/
    // id from foodTypes table
    PreferredFood:  {
      type: DataTypes.INTEGER
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
    contact_mobile:  {
      type: DataTypes.BOOLEAN
    },
    contact_email: {
      type: DataTypes.BOOLEAN
    },  
    contact_twitter: {
      type: DataTypes.BOOLEAN
    },
    contact_instagram:{
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
/*
  CharityInfo.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
*/
  return DonorInfo;
};
