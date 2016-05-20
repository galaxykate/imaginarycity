var Tarot = Class.extend({
	init: function() {
		this.cards = [];
		var grammar = tracery.createGrammar(rawTarotGrammar);



		// create 4 suits and 4 images for them
		var suits = [];
		var symbolNames = Object.keys(symbols);

		for (var i = 0; i < 4; i++) {
			var symbolName = getRandom(symbolNames);

			var suit = {
				name: symbolName,
				symbol: symbols[symbolName],
				svg: grammar.flatten("#suitSVG#"),
				interpretation: grammar.flatten("#interpretation#"),
			}


			var names = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"];

			for (var j = 0; j < 13; j++) {
				var num = names[j];
				var title = num + " of " + suit.name;
				grammar.pushRules("myEmoji", suit.symbol);
				grammar.pushRules("mySize", 5);
				count = "";
				for (var k = 0; k < j + 1; k++) {
					count += "#emoji#";
				}

				grammar.pushRules("mySymbolCount", count);
				var svg = grammar.flatten("#minorSVG#");
				var interpretation = grammar.flatten("#minorInterpretation#");
				var c = new Card(title, interpretation, suit, svg);
				c.count = j + 1;
				this.cards.push(c);
			}
		}
		// Create the minor arcana

		// Create the major arcana


		// Create a tarot deck
		// Create all the cards 
		// Each card has:
		//   an svg graphic, 
		//   a title (the priestess, the ten of clubs)
		//   a description, with any positions
		console.log(this);

	}
});

var Card = Class.extend({
	init: function(title, interpretation, suit, svg) {
		this.title = title;
		this.interpretation = interpretation;
		this.svg = svg;
		this.suit = suit;
	},

	toDiv: function(holder) {
		this.div = $("<div/>", {
			class: "card"
		}).appendTo(holder);
		this.div.title = $("<div/>", {
			html: this.title,
			class: "title"
		}).appendTo(this.div);

		this.div.content = $("<div/>", {
			html: this.svg,
			class: "title"
		}).appendTo(this.div);
	}
})