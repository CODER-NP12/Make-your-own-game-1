var backgroundImg;
var superman, sad_superman, vic1_superman, vic2_superman, vic3_superman;
var superwoman, sad_superwoman, vic1_superwoman, vic2_superwoman;
var evilqueen, evilqueen_happy, evilqueen_sad, evilqueen_angry;
var sapling;
var arrow;

function preload() {

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}