var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxtouch = 0;

var game = 1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 690);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="tan";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  textSize(21);
  text("Use Down Arrow to Drop the Package",210,100);
  

  if(packageSprite.isTouching(groundSprite)){
	  boxtouch = boxtouch + 1;
  }

  if(boxtouch === 4){
     packageSprite.scale = 0.24;
  }

  if(boxtouch === 9){
	  packageSprite.scale = 0.28;
  }

  if(boxtouch === 15){
	  packageSprite.scale = 0.32;
  }

  if(boxtouch === 21){
	  Body.setStatic(packageBody, true);
	  game = 0;
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW && game == 1) {
	// Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody, false);
  }
}



