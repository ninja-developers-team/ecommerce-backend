'use strict'
const mongoose = require('mongoose')
/*
====================================================
====================================================
           shoppingCardList schema
====================================================
====================================================
*/
const shoppingCardList = new mongoose.Schema({
    userEmail: { type: 'string', unique: true },
    shoppingCardItems: { type: Array },
})
/*
====================================================
====================================================
           favoriteList schema
====================================================
====================================================
*/
const favoriteList = new mongoose.Schema({
    userEmail: { type: 'string', unique: true },
    favoriteItems: { type: Array },
})
/*
====================================================
====================================================
           user Schema
====================================================
====================================================
*/
const userSchema = new mongoose.Schema({
    userEmail: { type: String, unique: true },
    fullName: { type: String },
    imageUrl: { type: String },
    userName: { type: String },
    shoppingList: [shoppingCardList],
    favoritList: [favoriteList]
})

const userModel = mongoose.model('users', userSchema)
/*
========================================
add a new user to the database
----------------------------------------
*/
const seedFunction = async (data) => {
    console.log('hi from seed');
    const { email, name, picture, nickname } = data;
    userModel.find({ userEmail: email }, (err, userModel) => {
        if (err) {
            console.log(err)
        }
        console.log(userModel.length)
        if (userModel.length === 0) {
            console.log('going to add user');
            addUser(email, name, picture, nickname)
            console.log('done done done ')
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
        console.log('adding user')
        await new_user.save();
        console.log('done adding user')
        // response.json('user added');
    } catch (error) {
        console.log('some thing wrong', error)
        // response.status(500).send(error);
    }
}

module.exports = { userModel, seedFunction }
