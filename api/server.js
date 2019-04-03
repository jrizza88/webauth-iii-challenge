const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// add Router files here from Router folders

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// call the routes here

server.get('/', (req, res) => {
    res.send("Welcome to webauth challenge III!!");
  });

  module.exports = server;