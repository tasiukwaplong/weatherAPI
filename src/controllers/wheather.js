const env = require('dotenv').config();
const Axios = require('axios').default;
const { Op } = require('sequelize');
const { User } = require('../database/models');
const MSG = require('./messages');

const WEATHERSTACK_URL = 'http://api.weatherstack.com/current';

module.exports = {
  getWeather(req, res) {
    // check if user has entered location to serach for and token
    if (req.body.token === undefined || req.body.location === undefined) {
      return res.status(400).send({
        errored: true,
        message: MSG.ERROR.INVALID_INPUT
      });
    }
    // if all input are entered
    return User
      .findAll({
        attributes: ['id'],
        where: {
          sessionToken: req.body.token,
          expires: {
            [Op.gt]: new Date().toISOString()
          }
        }
      })
      .then((user) => {
        // if token exists and still valid
        if (user.length !== 0) {
          // check wheather for said location
          Axios.get(WEATHERSTACK_URL, {
            access_key: env.parsed.API_KEY,
            query: req.body.location
          })
            .then((response) => {
              res.status(201).send({
                erorred: false,
                message: response
              });
            })
            .catch((error) => {
              res.status(400).send({
                erorred: true,
                message: error
              });
            });
        } else {
          res.status(400).send({
            erorred: true,
            message: MSG.ERROR.INVALID_OR_EXPIRED_TOKEN
          });
        }
      })
      .catch(() => {
        res.status(400).send({
          errored: true,
          message: MSG.ERROR.SERVER_ERROR
        });
      });
  }
};
