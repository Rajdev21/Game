var pikachu, pikachu_running

var invisibleGround

function preload() {
pikachu_running = loadAnimation("Pika_run_1.gif" ,"Pika_run_2.gif" ,"Pika_run_3.gif" ,"Pika_run_4.gif")


  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")

}


function setup() {
createCanvas(600,200);
pikachu = createSprite(50,180,20,50)
pikachu.addAnimation("Pika_run",pikachu_running)
pikachu.scale = 0.5;




invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}


function draw() {
  background(180);
  



  
  trex.collide(invisibleGround);
  
  drawSprites();
}

