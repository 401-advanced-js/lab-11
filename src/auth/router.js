'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');

/**
 * Saves user with request.body from the post, generates token to pass on to the rest of the site
 * @param {string} '/signup'
 * @callback {function} (req,res,next)
 */
authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

/**
 * Signs in a user with the authorization token
 * @param {string} '/signin'
 * @callback {function} auth
 * @callback {function} (req,res,next)
 */
authRouter.post('/signin', auth, (req, res, next) => {
  console.log(req.token);
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
