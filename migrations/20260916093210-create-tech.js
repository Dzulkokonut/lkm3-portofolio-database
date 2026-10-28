'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project_tech', {
     project_id: {
        type: Sequelize.INTEGER, allowNull: false, primaryKey: true,
        references: { model: 'Projects', key: 'id' }, onDelete: 'CASCADE',
      },
      tech_id: {
        type: Sequelize.INTEGER, allowNull: false, primaryKey: true,
        references: { model: 'Techs', key: 'id' }, onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project_tech');
  }
};
