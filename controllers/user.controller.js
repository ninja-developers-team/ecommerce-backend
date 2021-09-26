'use strict'
const { userModel } = require('../models/user.model')
const { cardModel } = require('../models/card.schema')
const updateUserCart = async (email) => {
    cardModel.findOneAndUpdate({ userEmail: email }, (err, Cart) => {
        if (Cart === null) {
            res.send('no data was found');
        } else {
            const CartUpdate = { shoppingList: Cart.shoppingList }
            console.log(CartData)
            userModel.findOneAndUpdate({ userEmail: email },
                CartUpdate,
                { new: true },
            )
        }
    });
}
module.exports = { updateUserCart }
/*
 cardModel.findOneAndUpdate({ userEmail: email },
        {
            userEmail: user.userEmail,
            fullName: userEmail,
            imageUrl: userEmail,
            userName: userEmail,
            shoppingList: ,
            favoritList: userEmail.favoritList
        }, // will be the list of new data we want to update
        { new: true }, // the flag to tell the method to return the new updated data
    )
    */