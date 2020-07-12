// 'use strict';
const passwordHash = require('password-hash');
const MSG = require('../../controllers/messages.js');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        lengthStatus(value) {
          if (value.length < 3 || value.length > 20) {
            throw new Error(MSG.ERROR.USERNAME_LENGTH);
          }
        }
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        lengthStatus(value) {
          if (value.length < 3 || value.length > 20) {
            throw new Error(MSG.ERROR.PASSWORD_LENGTH);
          }
        }
      }
    },
    sessionToken: DataTypes.STRING,
    expires: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = passwordHash.generate(user.password);
      }
    }
  });
  return User;
};
