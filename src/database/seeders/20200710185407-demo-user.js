// 'use strict';
module.exports = {
  up: (queryInterface /* ,Sequelize */) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'tasiukwaplong',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'username',
      password: 'password2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface/* , Sequelize */) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
