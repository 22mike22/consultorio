'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facturas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Facturas.init({
    fechaFactura: DataTypes.DATE,
    monto: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Facturas',
  });
  return Facturas;
};