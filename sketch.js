var monkey,monkey_running;
var banana,bananaImage;
var obstacle,obstacleImage;
var bananaGroup;
var obstacleGroup;
var ground;
var survivalTime;


function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",         "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",  "sprite_7.png","sprite_8.png")
  
  obstacleImage = loadImage("obstacle.png")
  
  bananaImage = loadImage("banana.png")
  
}
 




function setup() {
  
  ground = createSprite(200,360,400,8)
  ground.shapeColor = "goldenrod"
ground.velocityX = -5;
   ground.x = ground.width /2;
  
  monkey = createSprite(100,320,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.15
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  survivalTime = 0
  
  }



function draw() {
  
    

 if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
 }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
   if (ground.x < 200){
      ground.x = 200
    }
  
  spawnBananas();
  spawnObstacles();
  
  survivalTime = survivalTime + Math.round(frameCount/60);

  background("aqua")
  
  drawSprites();
  
  textSize(20)
 stroke("red")
  fill("black")
   text("SurvivalTime :  "+ survivalTime, 200,50);
  
  
  
}


function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    banana.lifetime = 200;
     
    bananaGroup.add(banana);
  
}
}

  function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,335,40,10);
   obstacle.y = Math.round(random(337,338));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    
    obstacle.lifetime = 200;
     
    obstacleGroup.add(obstacle);
  
}
}



