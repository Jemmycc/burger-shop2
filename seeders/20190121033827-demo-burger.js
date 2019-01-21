'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burgers', [
      {
        burger_name: 'Bacon Double Cheeseburger',
        devoured: false
      },
      {
        burger_name: 'ShackBurger',
        devoured: false
      },
      {
        burger_name: 'Ramen Burger',
        devoured: false
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('burgers', null, {});
  }
};
