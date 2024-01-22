'use strict';

const TABLE_NAME = 'colors';

const initialColors = [
  { name: 'Black' },
  { name: 'DeepPink' },
  { name: 'Red' },
  { name: 'Aquamarine' },
  { name: 'Gold' },
  { name: 'YellowGreen' },
  { name: 'Yellow' },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      initialColors,
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      TABLE_NAME,
      {
        name: initialColors.map(color => color.name)
      }
    )
  }
};
