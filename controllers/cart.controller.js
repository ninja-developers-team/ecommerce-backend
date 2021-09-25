const { cardModel } = require('../models/card.schema')
const { userModel } = require('./auth.controller')

const addToCart = async (req, res) => {
    console.log('add to cart1')
    const newObj = req.body
    const data = populateProduct(newObj)
    res.send(data)

}
const creatCard = (productobj, quantity) => {
    const newQuy = quantity + productobj.quantity
    const newPrice = productobj.price * (quantity + productobj.quantity)
    console.log('new price = ', newPrice, 'new Quy = ', newQuy)

    const newCard = {
        userEmail: productobj.userEmail,
        imagePath: productobj.imagePath,
        title: productobj.title,
        description: productobj.description,
        price: newPrice,
        quantity: newQuy,
    }
    console.log(" new card ", newCard)
    const newCard2 = new cardModel(newCard)
    console.log('created')
    newCard2.save
        (
            (function (err, result) {
                if (err) {
                    console.log("SOMETHING WENT WRONG");
                    console.log(err);
                } else {
                    console.log("SUCCESSFUL RESULT ADDITION");
                }
            })
        )

}
function populateProduct(productobj) {
    cardModel.findOne({ title: productobj.title, userEmail: productobj.userEmail },
        (err, card) => {
            if (card === null) {
                console.log('not found')
                creatCard(productobj, 0)

            } else {
                const id = card._id;
                const quantity = card.quantity;
                console.log(quantity)
                cardModel.findByIdAndDelete(id, function (err, docs) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log("Removed User : ", docs);
                        creatCard(productobj, quantity)
                    }
                })
            }
        });
    return "msg"

}



module.exports = { addToCart }

