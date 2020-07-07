var paperBall, ground;
var D1, D2, D3, Drect;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(500,height-20, 1000,10);
	 paperBall = new Paper(150,300,60);
	 Drect = new Dustbin(820,280, 913-727,200);
	 D1 = new Dustbin(820,365,200,15);
	 D2 = new Dustbin(820-93,313,15,90);
	 D3 = new Dustbin(820+93,313,15,90);
	 

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
  keyPressed();
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  ground.display();
  paperBall.display();
  Drect.display();

  D1.display();
  D2.display();
  D3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paperBall.body, paperBall.body.position,{x:400, y:-400});
	}
}


