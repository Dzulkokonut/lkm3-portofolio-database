'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tech.belongsToMany(models.Project, { through: 'project_tech', foreignKey: 'tech_id'
      // define association here
    }
  }
  Tech.init({
    name: { type: DataTypes.STRING, unique: true
  }, {
    sequelize,
    modelName: 'Tech',
  });
  return Tech;
};
