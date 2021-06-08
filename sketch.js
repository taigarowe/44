var oscar;
var ground


function preload() {

}

function setup() {
  createCanvas(1350, 625)
  oscar = createSprite(200,450,50,50);
  oscar.shapeColor = "red"

  ground = createSprite(675,500, 1350, 20);
}

function draw() {
background("black");

if(keyWentDown("UP_ARROW")) {
  oscar.velocityY = - 20;
}

oscar.velocityY = oscar.velocityY + 1;

oscar.collide(ground);
drawSprites();
}