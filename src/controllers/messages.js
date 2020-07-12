const MSG = {
  SUCCESS: {
    REGISTERATION_SUCCESSFUL: 'Registeration successful'
  },
  ERROR: {
    PASSWORD_LENGTH: 'Password should not be less than 3 or greater than 20 characters',
    USERNAME_LENGTH: 'Username should not be less than 3 or greater than 20 characters',
    USERNAME_EMPTY: 'Username is empty. Kinndly enter a unique username',
    PASSWORD_EMPTY: 'Password cannot empty. Kinndly enter a unique username',
    LOGIN_UNSUCCESSFUL: 'Login unsuccessful. Username or password incorrect',
    SERVER_ERROR: 'Internal Server error',
    USER_NOT_EXIST: 'User does not exist',
    INVALID_INPUT: 'Kindly provide input for location and token',
    INVALID_OR_EXPIRED_TOKEN: 'Token has expired or is invalid. Login again to obtain a new token'
  }
};
module.exports = MSG;
