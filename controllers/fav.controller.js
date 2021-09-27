'use strict'
const { updateUserCart } = require('./user.controller')
const { populateProduct } = require('../hellper/fav.helper')
const { favModel } = require('../models/fav.schema')
//const { addToFav, delFromFav, getCartFav } = require('./controllers/fav.controller')
const addToFav = async (req, res) => {
    console.log('add to fav1')
    const newObj = req.body
    const data = populateProduct(newObj)
    const favCart = updateUserCart(newObj.userEmail)
    res.send(favCart)
}
const getCartFav = (req, res) => {
    const user = req.query.email;
    favModel.find({ userEmail: user }, (err, userCard) => {
        if (userCard === null) {
            res.send('no data was found');
        } else {
            res.json(userCard);
        }
    })
}
module.exports = { addToFav, getCartFav }