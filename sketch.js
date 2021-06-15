
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render=Matter.render
;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new roof(350,100,300,30);
	world.add(world,roof1)

    bob1=new Bob(250,300);
	bob2=new Bob(300,300);
	bob3=new Bob(350,300);
	bob4=new Bob(400,300);
	bob5=new Bob(450,300);

	rope1=new rope(bob1.body,roof.body,-100,0);
	world.add(world,rope1);

    rope2=new rope(bob1.body,roof.body,-50,0);
	world.add(world,rope2);

	rope3=new rope(bob1.body,roof.body,-0,0);
	world.add(world,rope3);

	rope4=new rope(bob1.body,roof.body,+50,0);
	world.add(world,rope4);

	rope5=new rope(bob1.body,roof.body,+100,0);
	world.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof1.display();
   
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}
function keypressed(){
	if(keyCode===UPARROW){
		matter.body.anyForce(bob1.body,bob1.body.position,{x:-730,y:0})
	}
	 }


