var grammars = {

};

grammars.garden = {
	concept: ["the universe", "the cosmos", "the earth", "water", "fear", "peace", "understanding", "the mind", "home", "loss"],
	adj: ["tall", "slender", "smooth", "striated", "rippling", "grey", "pale", "dark"],
		relationship: ["overlooks", "is surrounded by"],
node: ["#adj.a# rock|This rock represents #concept#"],
};


grammars.city = {
	concept: ["war", "loss", "heroism", "victory", "patriotism", "love of the city", "the Arts", "the Sciences"],
	statue: ["statue", "bronze figure", "bas relief"],
	statueType: ["horse", "horse and rider", "woman", "soldier", "mother", "nurse", "king", "queen", "lion", "dragon"],
	relationship: ["overlooks", "leads to", "is placed below", "can see", "indicates a road to"],
	node: ["#statue# of #statueType.a#|This represents #concept#"],
};



grammars.concepts = {
	concept: ["the universe", "death", "life", "moose", "elk", "vacation", "desire", "water", "fear", "peace", "understanding", "the mind", "home", "war", "loss", "heroism", "victory", "patriotism", "love of the city", "the Arts", "the Sciences"],
	node: ["#concept#|"],
};

