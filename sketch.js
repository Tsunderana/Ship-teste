var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

  drawSprites();
  
  //movimentar o barco para a direita
  if(keyDown("right")){
    ship.position.x = ship.position.x+5;
  }

  //movimentar o barco para a esquerda
  if(keyDown("left")){
    ship.position.x = ship.position.x-5;
  }

  //movimentar o barco para cima
  if(keyDown("up")){
    ship.position.y = ship.position.y-5;
  }

  //movimentar o barco para baixo
  if(keyDown("down")){
    ship.position.y = ship.position.y+5;
  }

 
  //parar o barco na borda direita
  if(ship.x>=360){
    ship.x = 360
  }
  //parar o barco na borda esquerda
  if(ship.x <10){
    ship.x = 10
  }
  //parar o barco na borda inferior  
  if(ship.y>=360){
    ship.y=360
  }
  //parar o barco na borda da água 
  if(ship.y<=180){
  ship.y=180
  }

  
}