'use strict'
const { shoppingCardList } = require('./card.schema')
const { favoriteList } = require('./fav.schema')
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userEmail: { type: String, unique: true },
    fullName: { type: String },
    imageUrl: { type: String },
    userName: { type: String },
    shoppingList: [shoppingCardList],
    favoritList: [favoriteList]
})
const userModel = mongoose.model('users', userSchema)
const seedFunction = async (data) => {
    const { email, name, picture, nickname } = data;
    userModel.find({ userEmail: email }, (err, userModel) => {
        if (err) {
            console.log(err)
        }
        console.log(userModel.length)
        if (userModel.length === 0) {
            addUser(email, name, picture, nickname)
        }
    })
}
const addUser = async (email, name, picture, nickname) => {
    const new_user = new userModel({
        userEmail: email,
        fullName: name,
        imageUrl: picture,
        userName: nickname,
        shoppingList: [],
        favoritList: []
    });
    try {
        await new_user.save();
    } catch (error) {
        console.log('some thing wrong', error)
    }
}
module.exports = { userModel, seedFunction }
