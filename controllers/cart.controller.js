'use strict'
const { cardModel } = require('../models/card.schema')
const { userModel } = require('./auth.controller')
const { populateProduct } = require('../hellper/singelProductadd.helper')
const addToCart = async (req, res) => {
    console.log('add to cart1')
    const newObj = req.body
    const data = populateProduct(newObj)
    res.send(data)
}
module.exports = { addToCart }

const delFromCart = async (req, res) => {
    console.log('remov from cart1')
    const cartId = req.params.cartId;

    cardModel.deleteOne({ _id: cartId }, (error, deleted) => {
        if (error) {
            console.log(error)
        }
        res.send(deleted);
    });
}

const getCartShopin = (req, res) => {
    const user = req.query.email;
    cardModel.find({ userEmail: user }, (err, userCard) => {
        if (userCard === null) {
            res.send('no data was found');
        } else {
            res.json(userCard);
        }
    })
}

module.exports = { addToCart, delFromCart, getCartShopin }