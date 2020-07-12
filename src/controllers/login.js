const passwordHash = require('password-hash');
const { User } = require('../database/models');
const MSG = require('./messages');

const DAYS_SESSION_EXPIRE = 1; // 24 hours from time of creation

const sesionToken = () => {
  const sessionToken = `${new Date().getTime()}_${Math.random().toString(36).slice(2)}`;
  const now = new Date();
  const expires = now.setDate(now.getDate() + DAYS_SESSION_EXPIRE);
  return { sessionToken, expires };
};

module.exports = {
  update(req, res) {
    // User registeration
    return User
      .findAll({
        attributes: ['password', 'username'],
        where: {
          username: req.body.username
        }
      })
      .then((user) => {
        // if password is correct
        if (passwordHash.verify(req.body.password, user[0].password)) {
          const tokenAndExpiry = sesionToken();
          return User
            .update(tokenAndExpiry,
              {
                where: {
                  username: user[0].username
                }
              })
            .then((status) => {
              res.status(201).send({
                erorred: (status[0] === 0),
                message: {
                  token: tokenAndExpiry.sessionToken,
                  exires_in_days: DAYS_SESSION_EXPIRE
                }
              });
            });
        }
        // if not
        return res.status(400).send({
          erorred: true,
          message: MSG.ERROR.LOGIN_UNSUCCESSFUL
        });
      })
      .catch(() => {
        res.status(400).send({
          errored: true,
          message: MSG.ERROR.USER_NOT_EXIST
        });
      });
  }
};
