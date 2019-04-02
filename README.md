![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name

### Author: Spencer Hirata

### Links and Resources
* [PR](https://github.com/401-advanced-js/lab-11/pull/1)
* [![Build Status](https://travis-ci.com/401-advanced-js/lab-11.svg?branch=master)](https://travis-ci.com/401-advanced-js/lab-11)
* [back-end](https://blueberry-shortcake-12572.herokuapp.com/)

#### Documentation
* [jsdoc](https://blueberry-shortcake-12572.herokuapp.com/docs)

### Bugs Fixed
#### App.js
* router object .use() the authRouter

#### Router.js
* Changed the get method for path signin to a post

#### .env
* added mongoDbUri
* added PORT <= Did break without

#### users-model.js
* Required in node packages 'bcrypt' and 'jsonwebtoken'
* users.methods.comparePassword added terinary to the promise

#### middleware.js
* in _appBasic added parameter
* let auth = {username,password} instead of let auth = [username,password]

#### books.js
* added auth from middleware.js
* used the middleware.js middleware function on each route

### Setup
#### `.env` requirements
* `PORT=3000` - Port Number
* `MONGODB_URI=mongodb://localhost:27017/lab11` - URL to the running mongo instance/db

#### Running the app
* `npm i`
* populate the .env with port and mongodb_uri
* `nodemon`
* new terminal within repo `echo '{"username":"Spence","password":"badass"}' | http post :3000/signup`
* `http post :3000/signin -a Spence:badass`
* `http :3000/books -a Spence:badass`
* `http :3000/books/1 -a Spence:badass`
  
#### Tests
* `npm run test`
* `npm run lint`

#### UML
![Uml](./assets/lab11.jpg)
