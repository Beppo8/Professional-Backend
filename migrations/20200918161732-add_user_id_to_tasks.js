'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tasks','userId',{
      type: Sequelize.INTEGER, 
      reference: {
        model: {
          tableName: 'Users'
        },
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('tasks','userId');
  }
};
