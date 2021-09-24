'use strict'
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    userEmail: { type: 'string', unique: true },
    fullName: { type: 'string' },
    imageUrl: { type: 'string' },
    userName: { type: 'string' },
})



