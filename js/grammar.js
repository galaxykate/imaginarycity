var rawTarotGrammar = {

	myEmoji: "🚀",
	mySymbolCount: "#emoji#",
	digit: "1 2 3 4 5 6 7 8 9".split(" "),
	num: "#digit##digit#",
	emoji: "<text fill=\"red\" x=\"#num#\" y=\"#num#\" font-size=\"30\">#myEmoji#</text>",
	minorSVG: "<svg>#bg##mySymbolCount#</svg>",

	r360Start: [
		"", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"
	],
	r360: ["#r360Start#0"],

	bg: [
		"<rect fill='hsl(#r360#, 100%, 95%)' x='0' y='0' width='300' height='300'/>"
	],

};


var getRandom = function(a) {
	return a[Math.floor(Math.random() * a.length)];
};


var symbols = {
	scissors: "✂",
	airplanes: "✈",
	hands: "✋",
	pencils: "✏",
	snowflakes: "❄",
	rockets: "🚀",
	buses: "🚌",
	flags: "🚩",
	cigarettes: "🚪",
	bicycles: "🚲",
	bathtubs: "🛀",
	clocks: "⏰",
	time: "⏳",
	clouds: "☁",
	telephones: "☎",
	umbrellas: "☔",
	coffee: "☕",
	tea: "☕",
	cups: "☕",
	energy: "⚡",
	anchors: "⚓",
	balls: "⚽",
	heat: "♨",
	recycling: "♻",
	snowmen: "⛄",
	sailboats: "⛵",
	gasoline: "⛽",
	stars: "⭐",
	spirals: "🌀",
	jokers: "🃏",
	tsunamis: "🌊",
	planets: "🌏",
	crescents: "🌙",
	chestnuts: "🌰",
	sprouts: "🌱",
	palms: "🌴",
	cacti: "🌵"

}

var emotions = {
	"happiness": "😃",
	"winking": "😉",
	"peacefulness": "😌",
	"satisfaction": "😁",
	"cruel joy": "😆",
	"thankfulness": "😊",
	"infatuation": "😍",
	"smugness": "😏",
	"suspicion": "😒",
	"distress": "😓",
	"sorrow": "😔",
	"flirtation": "😘",
	"jocularity": "😜",
	"mirth": "😝",
	"disappointment": "😞",
	"disapproval": "😠",
	"mourning": "😢",
	"pain": "😣",
	"triumph": "😤",
	"terror": "😨",
	"lamentation": "😩",
	"loss": "😫",
	"catharsis": "😭",
	"despair": "😱",
	"astonishment": "😲",
	"embarassment": "😳",
	"glee": "😄",
}