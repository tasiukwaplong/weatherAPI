// 'use strict';
module.exports = {
  up: (queryInterface /* ,Sequelize */) => queryInterface.bulkInsert('Users', [{
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
  }]),

  down: (queryInterface/* , Sequelize */) => queryInterface.bulkDelete('User', null, {})
};
