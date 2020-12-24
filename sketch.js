var gameState=0











var tower,towerImg;
var door,doorImg,doorsGroup;
var climber, climberImg, climbersGroup
var ghost,ghostImg
var invisibleBlock, invisibleBlocksGroup







function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
}


function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  
  invisibleBlocksGroup=new Group();
  
  
  
  
  
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
}

function draw(){
  background(0);
  
  if(gameState===0){
     if(keyDown("left_Arrow")){
    ghost.x=ghost.x-3;
    }
  
    if(keyDown("right_Arrow")){
    ghost.x=ghost.x+3;
    }
    
     
    if(keyDown("space")){
    ghost.velocityY=-6;
    }
    ghost.velocityY=ghost.velocityY+0.3
    
    if(tower.y>400){
    tower.y=300
    
    }
    
    
    spawnDoors();
  
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY=0
     }
    
    ghost.collide(climbersGroup);
    
    
    
    
    
    
    
    
    if(invisibleBlocksGroup.isTouching(ghost) || ghost.y>600){
    ghost.destroy();
    gameState=1
    
    
    } 
    
    drawSprites()
  
  
 
  
  }
  if(gameState===1){
    
    textFont("Courier New")
    textSize(40)
    stroke("yellow")
    fill("blue")
    text("You lost!!",200,300)
    
  }
 
  
  
 

  
 
}

function spawnDoors(){
  if(frameCount%200===0){
    door=createSprite(300,-50)
    door.x=Math.round(random(150,500))
    door.addImage(doorImg);
    door.velocityY=3
    doorsGroup.add(door)
    door.lifetime=250
    
    door.depth=ghost.depth
    ghost.depth=ghost.depth+1
    
    climber=createSprite(300,10)
    climber.x=door.x
    climber.addImage(climberImg);
    climber.velocityY=3
    climbersGroup.add(climber)
    climber.lifetime=250
    
    invisibleBlock=createSprite(300,20)
    invisibleBlock.width=climber.width
    invisibleBlock.height=2
    invisibleBlock.x=climber.x
    invisibleBlock.velocityY=3
    invisibleBlocksGroup.add(invisibleBlock);
    invisibleBlock.lifetime=250        
    
    
    

    
  }
  
}