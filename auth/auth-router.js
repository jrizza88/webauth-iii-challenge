const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const { jwtSecret } = require('../config/secret');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(savedUser => {
            res.status(201).json(savedUser)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});
