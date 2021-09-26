"use strict";
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const { verifyToken } = require("./controllers/auth.controller");
const { getGameData } = require("./controllers/game.controller");
const {
	addToCart,
	delFromCart,
	getCartShoping,
} = require("./controllers/cart.controller");
const {
	createFavouriteGame,
	getFavouriteGame,
	deleteFavouriteGame,
	updateFavouriteGame,
} = require("./controllers/game.crud.controller");
mongoose
	.connect(`${MONGO_DB_URL}/Stop-And-Shop`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to database ");
	})
	.catch((err) => {
		console.error(`Error connecting to the database. \n${err}`);
	});
app.use(cors());
app.get("/", (req, res) => res.send("<h1> Welcome to our server 😊<h1>"));
app.get("/verify-token", verifyToken);
app.post("/addtocard", addToCart);
app.delete("/delfromcard/:cartId", delFromCart);
app.get("/getCart", getCartShoping);


/*part game*/
app.get("/game", getGameData);
// crud endpoints

//create favourung an game end point (create/post)
app.post("/game/favourite", createFavouriteGame);
// getting the favourite games end points (read/get)
app.get("/game/favourite", getFavouriteGame);

// deleteing the favourite games end points(delete/DELETE)
app.delete("/game/favourite/:slug", deleteFavouriteGame);

// updating the favourite games end points(update/PUT)
app.put("/game/favourite/:slug", updateFavouriteGame);
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});