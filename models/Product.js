// From Develop
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Product extends Model { }

Product.init(
  {
    //Added these, same as category
    id: {
      //ID Number
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_name: {
      //Name
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      //Product pricing
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      //Stock number
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      //Category of product
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
