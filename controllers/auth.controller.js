const jwt = require('jsonwebtoken');
const { getKey } = require('../hellper/auth.helper');
const { seedFunction } = require('../models/user.model')
const verifyToken = async (request, response) => {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, (error, user) => {
        if (error) {
            response.send('invalid token');
            console.log('error')
        }
        seedFunction(user);
    });
};
module.exports = { verifyToken };