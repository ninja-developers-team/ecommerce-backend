'use strict'
const mongoose = require('mongoose')


const shoppingCardList = new mongoose.Schema({
    userEmail: { type: 'string', unique: true },
    shoppingCardItems: { type: 'string' },
})

module.export = { shoppingCardList }