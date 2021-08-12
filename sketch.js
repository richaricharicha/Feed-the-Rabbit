var garden,rabbit;
var gardenImg,rabbitImg, appleImg, oleafImg, gleafImg, rleafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  oleafImg = loadImage("orangeLeaf.png");
  gleafImg = loadImage ("leaf.png");
  rleafImg = loadImage ("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(World.mouseX,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand = Math.round(random(1,100))
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;
  
  var select_sprites = Math.round(random(1,4));

if(frameCount%80==0) {
    if (select_sprites === 1){
      spawnApples();
    } 
     else if(select_sprites===2){
      spawnOrange();
    }
    else if(select_sprites===3){
      spawnGreen();
    }
    else if(select_sprites===4){
      spawnRed();
    }
}
  drawSprites();
}




function spawnApples(){

  apple = createSprite(Math.round(random(10,400)), Math.round(random(10,100)) ,30, 30)
  apple.velocityY = 4;
  apple.addImage(appleImg);
  apple.scale = random(0.05,0.1);
}

function spawnOrange(){

  orange = createSprite(Math.round(random(10,400)), Math.round(random(10,100)) ,30, 30)
  orange.velocityY = 4;
  orange.addImage(oleafImg);
  orange.scale = random(0.05,0.1);
}

function spawnGreen(){

  green = createSprite(Math.round(random(10,400)), Math.round(random(10,100)) ,30, 30)
  green.velocityY = 4;
  green.addImage(gleafImg);
  green.scale = random(0.05,0.1);
}

function spawnRed(){

  red = createSprite(Math.round(random(10,400)), Math.round(random(10,100)) ,30, 30)
  red.velocityY = 4;
  red.addImage(rleafImg);
  red.scale = random(0.05,0.1);
}
