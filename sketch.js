const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var paper;
var trashcan, trashcan_image;
var ground;

function setup() {
	var canvas = createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	};
	ground = Bodies.rectangle(800, 690, 1600, 10, ground_options);
	World.add(world, ground);
	
	var trashcan_options = {
		isStatic: true
	};
	trashcan = Bodies.rectangle(1000, 585, 150, 200, trashcan_options);
	trashcan_image = loadImage('dustbingreen.png');
	World.add(world, trashcan);

	paper = new Paper(500, 670);
}


function draw() {
	background('white');
	Engine.update(engine);

	rectMode(CENTER);
	strokeWeight(3);
	stroke('black');
	fill('#DC143C');
	rect(ground.position.x, ground.position.y, 1600, 10);

	imageMode(CENTER);
	image(trashcan_image, trashcan.position.x, trashcan.position.y, 150, 200);

	paper.display();
	KeyPressed();
}
function KeyPressed() {
	if(keyWentDown('up')) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:35, y:-105});
	}
	if(paper.body.position.x > 1000 && paper.body.position.y < 585) {
		paper.body.position.x = 1800;
	}
}

