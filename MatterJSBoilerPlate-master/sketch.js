
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box,box1,box2,paper1;
var engine,world,ground;
var dustbin, dustbinimage;
function preload()
{
dustbinimage=loadImage("sprites/dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	box = createSprite(490,610,20,100);
	box.shapeColor=color("white");

	box1=createSprite(580,650,200,20);
	box1.shapeColor=color("white");
	
	box2=createSprite(685,610,20,100);
	box2.shapeColor=color("white");
	dustbin=createSprite(580,625,150,35);
	dustbin.addImage(dustbinimage);
	paper1=new paper(100,200,140,70);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = Bodies.rectangle(490,610,20,100,{isStatic: true} );
	World.add(world,box);
	box1 = Bodies.rectangle(580,650,200,20,{isStatic: true} );
	World.add(world,box1);
	box2 = Bodies.rectangle(685,610,20,100,{isStatic: true} );
	World.add(world,box2);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ellipseMode(RADIUS);
  ellipse(paper1.position.x,paper1.position.y,2,2);
  drawSprites();
 
}
function keyPresses(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}
}


