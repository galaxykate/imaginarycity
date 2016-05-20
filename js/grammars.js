var grammars = {

};

grammars.garden = {
	concept: ["the universe", "the cosmos", "the earth", "water", "fear", "peace", "understanding", "the mind", "home", "loss"],
	adj: ["tall", "slender", "smooth", "striated", "rippling", "grey", "pale", "dark"],
		relationship: ["overlooks", "is surrounded by"],
node: ["#adj.a# rock|This rock represents #concept#", "🌱|"],
};


grammars.city = {
	concept: ["war", "loss", "heroism", "victory", "patriotism", "love of the city", "the Arts", "the Sciences"],
	itemAdj: ["used", "blackmarket", "discount", "novelty", "luxury", "well-worn", "illicit", "questionable"],
	shop:["market", "stall", "shop", "cornerstore"],
	sellableItems: ["cats", "coffee", "coffeepots", "magazines", "sunglasses", "books", "liquor", "wallets", "shoes", "clothing","magazines","desires", "dreams","rumors", "sausages", "mattresses", "electronics"],
	statue: ["statue", "bronze figure", "bas relief"],
	statueType: ["horse", "horse and rider", "woman", "soldier", "mother", "nurse", "king", "queen", "lion", "dragon"],
	relationship: ["overlooks", "blocks the way to", "leads to", "is placed below", "can see", "indicates a road to"],
	node: ["#statue.capitalize# of #statueType.a#|This represents #concept#", "[items:#sellableItems#]#shop.capitalize# selling #items#|This shop sells #itemAdj# #items#"],
};



grammars.concepts = {
	concept: ["the universe", "death", "life", "moose", "elk", "vacation", "desire", "water", "fear", "peace", "understanding", "the mind", "home", "war", "loss", "heroism", "victory", "patriotism", "love of the city", "the Arts", "the Sciences"],
	node: ["#concept#|"],
};

