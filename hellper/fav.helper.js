'use strict'
const { favModel } = require('../models/fav.schema')
const creatCard = (productobj) => {
    const newCard = {
        userEmail: productobj.userEmail,
        imagePath: productobj.imagePath,
        title: productobj.title,
        description: productobj.description,
        price: productobj.price,
    }
    const newCard2 = new favModel(newCard)
    console.log('created')
    newCard2.save
        ((function (err, result) {
            if (err) {
                console.log("SOMETHING WENT WRONG");
                console.log(err);
            } else {
                console.log("SUCCESSFUL RESULT ADDITION");
            }
        }))
}
function populateProduct(productobj) {
    favModel.findOne({ title: productobj.title, userEmail: productobj.userEmail },
        (err, fav) => {
            if (fav === null) {
                console.log('not found')
                creatCard(productobj)
            }
            else {
                const id = fav._id;
                favModel.findByIdAndDelete(id, function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Removed fav : ", docs);
                    }
                })
            }
        });
    return "msg"
}
module.exports = { populateProduct }