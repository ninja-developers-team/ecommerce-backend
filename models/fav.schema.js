'use strict'
const mongoose = require('mongoose')
const favoriteList = new mongoose.Schema({
    userEmail: { type: 'string', unique: true },
    favoriteItems: { type: Array },
})
module.exports = { favoriteList }