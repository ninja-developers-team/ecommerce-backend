"use strict";

class GameModel {
	constructor(data) {
		this.title = data.title;
		this.salePrice = data.salePrice;
		this.normalPrice = data.normalPrice;
		this.dealRating = data.dealRating;
		this.thumb = data.thumb;
		this.count = 1;
	}
}

module.exports = { GameModel };
