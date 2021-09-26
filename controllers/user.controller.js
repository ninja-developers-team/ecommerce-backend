'use strict'
const { userModel } = require('../models/user.model')
const axios = require('axios')
const { getCartShoping } = require('./cart.controller')
const updateUserCart = async (email) => {
    userModel.findOneAndUpdate({ userEmail: email }, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            const user = req.query.email;
            cardModel.find({ userEmail: email }, (err, userCard) => {
                if (userCard === null) {
                    console.log(userCard, 'empty');
                    return ('no data was found');
                } else {
                    console.log(userCard, 'not empty');
                    return ({ userCard });
                }
            })
        }

    })
}
module.exports = { updateUserCart }