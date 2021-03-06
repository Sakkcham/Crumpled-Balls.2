
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world; 
 var ground,world;
 var binImg,bin;

 function preload(){
  binImg=loadImage("Images/DustbinObject.jpg");
 }

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground();
	crumpledPaper=new Paper();

	bin=createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale=0.45;

	 binPart1=new Dustbin(982,585,18,120);
	 binPart2=new Dustbin(962,565,130,10);
	 binPart3=new Dustbin(1024,505,10,120);




	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

   
  ground.display();
  crumpledPaper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown=== UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:15, y:-15})
	}
}
 
