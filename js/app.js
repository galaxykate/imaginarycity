var app = {
	init: function() {

		this.nodes = [];
		var holder = $("#nodes");
		// Create the city by placing many nodes
		for (var i = 0; i < 20; i++) {

			var n = new MapNode(0, 0);
			n.setToPolar(50 * Math.pow(i, .66) + 20 + 10 * Math.random(), 2.5 * Math.pow(i, .65) + .01 * i * Math.random());
			n.x *= 1.4;
			n.x += 400;
			n.y += 200;
			//n.toDiv(holder);
			//n.updatePosition();
			this.nodes.push(n);

		}

		var count = 0;
		setInterval(function() {
			if (count < 0) {
				app.ease(count);
				app.ease(count);
				app.ease(count);
				app.ease(count);
				app.ease(count);
				app.ease(count);
				app.ease(count);

			}
			count++;
		}, 20);



		var select = $("#grammar-select");
		Object.keys(grammars).map(function(name) {
			select.append("<option>" + name + "</option>");
		});
		select.on('change', function(e) {
			var optionSelected = $("option:selected", this);
			var valueSelected = this.value;
			app.loadGrammar(valueSelected);
		});


		// Compute the voronoi
		var bbox = {
			xl: 0,
			xr: 800,
			yt: 0,
			yb: 600
		};

		// console.log(bbox);
		var voronoi = new Voronoi();

		var diagram = voronoi.compute(this.nodes, bbox);
		console.log(diagram);

		// create an array with nodes

		this.edges = [];
		for (var i = 0; i < this.nodes.length; i++) {
			for (var j = i + 1; j < this.nodes.length; j++) {
				var d = this.nodes[i].getDistanceTo(this.nodes[j]);
				if (d > 0 && d < 140 + 100*Math.random()) {
					this.edges.push({
						from: i,
						to: j,
						length: 240,
						 font: {align: 'bottom'}
					});
				}
			}
		}
		console.log(this.edges);

		// create a network
		var container = document.getElementById('network');
		var data = {
			nodes: this.nodes,
			edges: this.edges
		};
		var options = {
			nodes: {
				font: {
					strokeWidth: 0
				}
			},
			edges: {
				font: {
					strokeWidth: 0
				}
			}
		};


		app.network = new vis.Network(container, data, options);

		this.loadGrammar("garden");

	},

	loadGrammar: function(name) {
		app.applyGrammar(grammars[name]);
	},

	applyGrammar: function(raw) {
		app.grammar = tracery.createGrammar(raw);
		app.grammar.addModifiers(baseEngModifiers);

		for (var i = 0; i < this.nodes.length; i++) {
			var raw = app.grammar.flatten("#node#").split("|");
			this.nodes[i].setName(raw[0].trim());
			this.nodes[i].setDescription(raw[1].trim());
			this.nodes[i].createGraphicLabel();
		}

		for (var i = 0; i < this.edges.length; i++) {
			this.edges[i].label = app.grammar.flatten("#relationship#") ;
	}
		

		console.log("rebuild");
		app.network.setData({
			nodes: this.nodes,
			edges: this.edges
		});
	},

	ease: function(count) {
		var center = new Vector(300, 200);

		for (var i = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			n.force = new Vector();
			for (var j = 0; j < this.nodes.length; j++) {
				var n2 = this.nodes[j];
				if (n2 !== n) {
					var d = n.getOffsetTo(n2);
					var m = d.magnitude();
					if (m < 180 && m > 0) {
						var d2 = 60 - m;
						var pow = -100 / m;
						d.mult(pow);
						n.force.add(d);
						//	console.log(d);
					}

				}

			}
			var offset = center.getOffsetTo(n);
			n.force.div(Math.pow(this.nodes.length - 1, .2));
			n.force.addMultiple(offset, -.2 * Math.pow(offset.magnitude(), -.5));
			n.force.addPolar(20 / (count + 10), 100 * utilities.noise(i, .2 * count));
		}



		for (var i = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			n.addMultiple(n.force, .02);

			n.updatePosition();
		}
	},

};


$(document).ready(function() {
	app.init();
});


var nodeCount = 0;
var MapNode = Vector.extend({
	init: function(x, y) {
		this._super(x, y);
		this.id = nodeCount++;
		this.description = "Just some node";
		this.name = "Node" + this.id;

	},

	createGraphicLabel: function() {

		var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
			'<rect x="0" y="0" width="100%" height="100%" fill="#CCCCCC" stroke-width="20" stroke="#ffffff" ></rect>' +
			'<foreignObject x="15" y="10" width="100%" height="100%">' +
			'<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +

			'<div style="color:red;font-size:50px">' +
			this.name + '</div><div>' + this.description +
			'</div>🗽</div>' +
			'</foreignObject>' +
			'</svg>';

		var DOMURL = window.URL || window.webkitURL || window;

		var img = new Image();
		var svg = new Blob([data], {
			type: 'image/svg+xml;charset=utf-8'
		});
		//this.image = DOMURL.createObjectURL(svg);
		//this.shape = 'image';
		this.label = this.name + "\n" + this.description;
		this.shape = "box";
	},

	setName: function(name) {

		this.name = name;
	},

	setDescription: function(desc) {
		this.description = desc;

	},

	updatePosition: function() {
		if (this.div)
			this.div.css({
				transform: this.toCSSTranslate()
			});
	},

	toDiv: function(holder) {
		var node = this;
		this.div = $("<div/>", {
			class: "city-node item",
			id: "node" + this.id,
		}).appendTo(holder).hover(function() {
			//	node.div.description.show();

		}, function() {
			//	node.div.description.hide();

		});

		this.div.name = $("<div/>", {
			class: "city-namelabel",
			html: this.name,
		}).appendTo(this.div);

		this.div.description = $("<div/>", {
			class: "city-label",
			html: this.description,
		}).appendTo(this.div);

		this.updatePosition();

	}
});