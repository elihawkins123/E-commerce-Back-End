const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const ProductTag = require('./ProductTag.js');
const Tag = require('./Tag.js');
const Product = require('./Product.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    }, 
    category_name: {
      type: DataTypes.STRING, 
      allowNull: false,
    }, 

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

