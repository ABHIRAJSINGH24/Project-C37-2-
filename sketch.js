const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var engine,world;

var bg;
var ground;
var superhero;
var fly1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var monster;

function preload() {
//preload the images here
//bg = loadImage("GamingBackground.png");

}

function setup() {
  canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(800,700,1600,20);

  superhero = new Hero(350,450,350,350);

  fly1 = new Fly(superhero.body,{x:350,y:350});

  box1 = new Box(750,650,100,100);
  box2 = new Box(850,650,100,100);
  box3 = new Box(950,650,100,100);
  box4 = new Box(1050,650,100,100);
  box5 = new Box(1150,650,100,100);
  box6 = new Box(1250,650,100,100);
  box7 = new Box(800,550,100,100);
  box8 = new Box(900,550,100,100);
  box9 = new Box(1000,550,100,100);
  box10 = new Box(1100,550,100,100);
  box11 = new Box(1200,550,100,100);
  box12 = new Box(850,450,100,100);
  box13 = new Box(950,450,100,100);
  box14 = new Box(1050,450,100,100);
  box15 = new Box(1150,450,100,100);
  box16 = new Box(900,350,100,100);
  box17 = new Box(1000,350,100,100);
  box18 = new Box(1100,350,100,100);
  box19 = new Box(950,250,100,100);
  box20 = new Box(1050,250,100,100);
  box21 = new Box(1000,150,100,100);

  monster = new Monster(1500,680,400,400);
}

function draw() {
  background(135,206,250);
  Engine.update(engine);

  ground.display();

  superhero.display();

  //fly1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  monster.display();
}

function mouseDragged(){
  Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}