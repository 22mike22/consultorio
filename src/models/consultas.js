'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Consultas.init({
    nombre: DataTypes.STRING,
    motivoDeConsulta: DataTypes.STRING,
    fechaDeConsulta: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Consultas',
  });
  return Consultas;
};