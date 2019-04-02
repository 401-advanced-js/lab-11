'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {

  try {
    // console.log(req.headers.authorization);
    let [authType, authString] = req.headers.authorization.split(/\s+/);
    console.log('auth string', authString);
    // BASIC Auth  ... Authorization:Basic ZnJlZDpzYW1wbGU=

    switch(authType.toLowerCase()) {
      case 'basic':
      console.log('in basic');
      return _authBasic(authString);
      default:
        return _authError();
    }

  } catch(e) {
    return _authError();
  }

  /**
   * Changes the headers to be readable js strings and checks if that, the string after the hashed function matches with a user in the database
   */
  function _authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64'); // <Buffer 01 02...>
    let bufferString = base64Buffer.toString(); // john:mysecret
    let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
    let auth = {username,password};  // {username:"john", password:"mysecret"}
    console.log('auth', auth)
    return User.authenticateBasic(auth)
      .then( user => _authenticate(user) );
  }
  /**
  * if valid user, continues to the next middleware. If not, ends it
  * @param {boolean} user 
  */
  function _authenticate(user) {
    if ( user ) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authError() {
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }

};

