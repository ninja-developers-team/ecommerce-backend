'use strict'
const mongoose = require('mongoose')

const shoppingCardList = new mongoose.Schema({
    userEmail: { type: String },
    imagePath: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    quantity: { type: Number },
}, {
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
}
)
const cardModel = mongoose.model('shoppingCard', shoppingCardList)

module.exports = { shoppingCardList, cardModel }