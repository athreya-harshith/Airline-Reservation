'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define associations here
      this.hasMany(models.Flight,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE'
      });
    }
  }
  Airplane.init({
    modelNumber: 
    {
      type: DataTypes.STRING,
      allowNull:false //can create object  like this ulike the below one to specify more than one constraint
    },
    capacity: {
      type:DataTypes.INTEGER,
      defaultValue:0,
      validate:{
        max:1000
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};