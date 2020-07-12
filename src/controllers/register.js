const { User } = require('../database/models');

module.exports = {
  create(req, res) {
    // User registeration
    return User
      .create({
        username: req.body.username,
        password: req.body.password
      })
      .then((user) => {
        res.status(201).send({
          erorred: false,
          message: {
            username: user.username
          }
        });
      })
      .catch((error) => {
        res.status(400).send({
          errored: true,
          message: error.errors[0].message
        });
      });
  }
};
