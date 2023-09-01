'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber:'airbus a320',
        capacity:100,
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ,
      {
        modelNumber:'Boeing777',
        capacity:900,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:'airbus a340',
        capacity:700,
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
