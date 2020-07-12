const registerUser = require('../controllers').register;
const loginUser = require('../controllers').login;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the WeatherAPI!'
  }));

  app.post('/api/register/', registerUser.create);
  app.post('/api/login/', loginUser.update);
};
