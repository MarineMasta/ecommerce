//From Develop
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class ProductTag extends Model { }

ProductTag.init(
  {
    //Added these, same as product and category
    id: {
      //product tag ID
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_id: {
      //actual product ID
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      // tag ID
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
