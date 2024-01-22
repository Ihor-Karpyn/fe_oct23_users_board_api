'use strict';

const TABLE_NAME = 'colors';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      TABLE_NAME,
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        }
      },
    );
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable(TABLE_NAME);
  }
};
