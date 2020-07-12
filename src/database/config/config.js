require('dotenv').config();

module.exports = {
  production: {
    use_env_variable: 'DATABASE_URL_PROD'
  },
  development: {
    use_env_variable: 'DATABASE_URL_DEV'
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST'
  }
};
