const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

// add Router files here from Router folders
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger('test'));

// call the routes here
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send("Welcome to webauth challenge III!!");
  });

  module.exports = server;