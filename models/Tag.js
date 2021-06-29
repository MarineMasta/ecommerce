//From Develop
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Tag extends Model { }

Tag.init(
  {
    //Added these, similar to category and product and product tags
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
