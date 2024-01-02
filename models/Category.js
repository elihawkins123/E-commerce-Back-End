const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const ProductTag = require('./ProductTag.js');
const Tag = require('./Tag.js');
const Product = require('./Product.js');

class Category extends Model {}

category.init(
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
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    }, 
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false,
    }, 
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false, 
      validate: {
        isDecimal: true,
      },
    }, 
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 10, 
      validate: {
        isNumeric: true,
      },
    }, 
    category_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'category', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    }, 
    tag_name: {
      type: DataTypes.STRING, 
    }, 
    category_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'category', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
productTag.init(  
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    }, 
    product_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'product', 
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'tag', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
); 
Product.hasMany(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
category.belongsTo(Product, {
  foreignKey: 'category_id',
});
Product.hasMany(Tag, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
}); 
Tag.belongsTo(Product, {
  foreignKey: 'category_id',
}); 

module.exports = Category;
