'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Medicamento.init({
    nombreDelMedicamento: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    fechaDeExpedicion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Medicamento',
  });
  return Medicamento;
};