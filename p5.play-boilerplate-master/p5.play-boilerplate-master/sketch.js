var mario, marioIMG, marioIMG2;
var ground, backgroundIMG;


function preload() {
  marioIMG = loadImage("images/mario_standing_removed.png");
  marioIMG2 = loadImage("images/mario_standing_removed.png","images/mario_removed.png");

  backgroundIMG = loadImage("images/Background.png");

  
}

function setup() {
  createCanvas(600,400);
  
  ground = createSprite(200, 390, 500, 10);

  mario = createSprite(20, 360, 20, 50);
  mario.addImage(marioIMG);
  mario.scale = 0.1  ;

  ground = createSprite(300, 200, 600, 400);
  ground.addImage(backgroundIMG);
}

function draw() {
  background("lightgray");  

  mario.collide(ground);

  drawSprites();
}