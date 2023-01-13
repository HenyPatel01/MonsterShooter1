var backgroundimg
var bulletimg, groupofBulletsImg
var bullet
var playerimg, player
var monsters
var fireball
var bulletGroup


function preload(){
  backgroundimg = loadImage("./gameimages/backgroundImg.png");
  bulletimg = loadImage("./gameimages/bullet.png");
  groupofBulletsImg = loadImage("./gameimages/collectbullet.png");
  playerimg = loadAnimation("playerImage1.png");
  shoot = loadAnimation("playerImage2.png", "playerImage3.png", "playerImage4.png");
  monster1img = loadImage("./gameimages/monsterImg.png");
  monster2img = loadImage("./gameimages/monster2Img.png");
  monster3img = loadImage("./gameimages/monster3Img.png");
  fireballimg = loadImage("./gameimages/fireballImg.png");
  


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //creating player
  player = createSprite(windowWidth/2,windowHeight/2 + 280);
  player.scale = 0.8;


  //shoot.frameDelay = 5;

  player.addAnimation("still", playerimg);
  player.addAnimation("shooting", shoot);


  bulletGroup = new Group()

}

function draw() {
  background(backgroundimg);  
  

  //moving the player
  if (keyIsDown(LEFT_ARROW)) {
    player.x = player.x - 10
  };

  if (keyIsDown(RIGHT_ARROW)) {
    player.x = player.x + 10
  };

  if (keyWentDown("space")) {
    player.changeAnimation("shooting", shoot)

    bullet = createSprite(player.x + 10,player.y - 30,20,20)
    bullet.addImage(bulletimg)
    bullet.scale = 0.1
    bullet.velocityX = 20
    bulletGroup.add(bullet)
    player.depth = bullet.depth
    player.depth = player.depth+2

  }
  else{
    player.changeAnimation("still", playerimg)
  };

  
  drawSprites();
}
