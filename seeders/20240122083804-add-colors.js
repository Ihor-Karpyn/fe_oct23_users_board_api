'use strict';

const TABLE_NAME = 'colors';

const colors = require('./20240122083804-add-colors.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      colors,
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      TABLE_NAME,
      {
        name: colors.map(color => color.name)
      }
    )
  }
};
