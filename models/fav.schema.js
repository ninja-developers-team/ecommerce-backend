'use strict'
const mongoose = require('mongoose')
const favoriteList = new mongoose.Schema({
    userEmail: { type: String },
    imagePath: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number }
}
    , {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    })
const favModel = mongoose.model('favCard', favoriteList)
module.exports = { favoriteList, favModel }