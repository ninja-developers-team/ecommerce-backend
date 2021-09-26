"use strict";

const gamePiecModel = require("../models/game.mongoose.model");

//post controller for creating a new item in our database
const createFavouriteGame = async (req, res) => {
	//destructure the data from the request body

	const { title, salePrice, normalPrice, dealRating, thumb, count } = req.body;
	// now we that got our data we would want to save it in the db

	const slug = title.toLowerCase().split(" ").join("-");

	// before creating the data check the title if data already exist in db
	gamePiecModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("data is already sxist");
		} else {
			//creating a new instance of the model
			const newgamePiecModel = new gamePiecModel({
				title: title,
				slug: slug,
				salePrice: salePrice,
				normalPrice: normalPrice,
				dealRating: dealRating,
				thumb: thumb,
				count: count,
			});

			//saving a new instance data to db
			newgamePiecModel.save().catch((error) => {
				res.send(error);
			});

			//sending back the response to the user with the newly created data
			res.send(newgamePiecModel);
		}
	});
};

//get controller for reading a new item in our database
const getFavouriteGame = async (req, res) => {
	//
	gamePiecModel.find({}, (error, data) => {
		res.send(data);
	});
};

//delete controller for deleting a new item in our database
const deleteFavouriteGame = (req, res) => {
	const slug = req.params.slug;
	// res.send(`your slug is ${slug}`);
	gamePiecModel.remove({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			let data = await gamePiecModel.find({});
			res.send(data);
			// res.send();
		}
	});
};
//put controller for updating a new item in our database
const updateFavouriteGame = async (req, res) => {
	let slug = req.params.slug;
	let id = req.params.id;
	let updatedData = req.body;
	gamePiecModel.findOne({ slug: slug }).then((game) => {
		game.title = updatedData.title;
		game.salePrice = updatedData.salePrice;
		game.normalPrice = updatedData.normalPrice;
		game.dealRating = updatedData.dealRating;
		game.thumb = updatedData.thumb;
		game.count = updatedData.count;

		game.save();
	});
	// let updateGameList = await gamePiecModel.find({});
	res.send("Item Added to your Card");
	let data = await gamePiecModel.find({});
	res.send(data);
	// const { title, salePrice, normalPrice, tdealRatingitl, thumb } = req.body;

	// const slug = req.params.slug;

	// gamePiecModel.find({ slug: slug }, (error, game) => {
	// 	if (error) {
	// 		res.send(error);
	// 	} else {
	// 		game.title = title;
	// 		game.salePrice = salePrice;
	// 		game.normalPrice = normalPrice;
	// 		game.tdealRatingitl = tdealRatingitl;
	// 		game.thumb = thumb;

	// 		game.save();
	// 		res.send(game);
	// 	}
	// });
};

module.exports = {
	createFavouriteGame,
	getFavouriteGame,
	deleteFavouriteGame,
	updateFavouriteGame,
};
