const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var square;
var enemy;
var wallL, wallR, wallU, wallD;
function setup() {
  createCanvas(800,600);
 // engine = Engine.create();
 // world = engine.world;
  wallL = new Wall();
  wallL.x = 15;
  wallR = new Wall();
  wallR.x = 785;
  wallU = new Floor();
  wallU.y = 15;
wallD = new Floor();
wallD.y = 585;
square = new Square();
enemy = new Enemy();
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  wallL.display();
  wallD.display();
  wallU.display();
  wallR.display();
  square.display();
  enemy.display();
  drawSprites();
}