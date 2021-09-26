"use strict";
const axios = require("axios");
const superagent = require("superagent");
const { GameModel } = require("../models/game.models");
const getGameData = async (req, res) => {
	const url = "https://www.cheapshark.com/api/1.0/deals?storeID=3";
	superagent
		.get(url)
		.then((data) => {
			const responseData = data.body.map((game) => {
				return new GameModel(game);
			});

			res.send(responseData);
		})
		.catch((error) => {
			console.log("==========");
			console.log("erorr accur");
			console.log(error);
			console.log("==========");
		});
};

module.exports = { getGameData };
