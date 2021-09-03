
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(300,200,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);

	launcher = new Launcher(paperObject.body,{x:300, y:200});
  
}


function draw() {
  rectMode(CENTER);
  background(230);
   
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launcher.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
    launcher.fly();
}