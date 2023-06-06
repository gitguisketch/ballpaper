
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world
let engine
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ballpaper = Bodies.circle(300, 20, 40, 200)
 World.add(world, ballpaper);

 ground = bodies.rectangle(200, 30, 400, 20)
 World.add(world, ground)

 groundObj.display();

 groundObj=new ground(width/2,670,width,20)
 leftSide = new ground(1100,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  fill("white")
  ellipse(ballpaper.position.x, ballpaper.position.y, 40, 200 )
  fill("yellow")
  rect(ground.position.x, ground.position.y, 400, 20)
  drawSprites();
 
}



