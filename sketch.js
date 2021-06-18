var PLAY=1;
var END=0;
var gameState=PLAY
var oscar;
var ground, invisibleGround;
var spike, lava, powerUp, poisonousPlant;
var spikeGroup, lavaGroup, poisonousPlantGroup, powerUpGroup;


function preload() {

}

function setup() {
  createCanvas(1350, 625)
  oscar = createSprite(200,450,50,50);
  oscar.shapeColor = "red"

  ground = createSprite(675,500, 2700, 20);
  ground.x = ground.width/2;

  invisibleGround = createSprite(675,500,1250,10);
  invisibleGround.visible = false;

  spikeGroup = new Group();
  poisonousPlantGroup = new Group();
  powerUpGroup = new Group();
  lavaGroup = new Group();
}

function draw() {
background("black");

if(gameState===PLAY){
  ground.velocityX = -5;
  if (ground.x < 0) {
    ground.x=ground.width/2
  }
  
  if(keyDown("UP_ARROW")&& player.y >= 100) {
    player.velocityY = -20;
  }
  
  oscar.velocityY = oscar.velocityY + 1;
}



drawSprites();
}

function spike(){
 if(frameCount)
  spike = createSprite();

}

function lava(){

}

function powerUp(){

}

function poisonousPlant(){

}