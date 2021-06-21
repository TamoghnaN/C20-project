let backGround,backGroundImg,bath,brush,gym,eat,move,sleep;
let astronaut;

function preload () {
  backGroundImg = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadImage("sleep.png");
}


function setup() {
  createCanvas(800,400);

backGround = createSprite(400, 200, 50, 50);
backGround.addImage(backGroundImg);
backGround.scale=0.2;
background.depth=1
 
astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;

}

function draw() {
  background(255,255,255);  
  drawSprites();

if (keyDown("up")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
}
if (keyDown("down")){
  astronaut.addAnimation("gym",gym);
  astronaut.changeAnimation("gym");
  astronaut.y=350;
}
if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
}
if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bath",bath);
  astronaut.changeAnimation("bath");
  astronaut.y=350;
}
if (keyDown("M")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityY=-0.1;
  astronaut.velocityX=-0.1;
}


}