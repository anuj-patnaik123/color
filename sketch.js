var ball ;
var ball2
var Edges;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;

function setup() {
  createCanvas(400,400);

  ball=createSprite(200,200);
  ball.scale = 0.1;
  ball.shapeColor = "red"


 box1 = createSprite(190,380,250,100)
 box1.scale = 0.7
 box1.shapeColor="blue";

 box2 = createSprite(12,200,20,100)
 box2.shapeColor="white"

  box3 = createSprite(389,200,20,100)
 box3.shapeColor="yellow"

 box4 = createSprite(190,0,190,100)
 box4.shapeColor="green"

 box5 = createSprite(0,0,180,100)
 box5 .shapeColor="lightblue"

 box6 = createSprite(389,0,180,100);
 box6 .shapeColor = "orange"

 box7 = createSprite(389,310,20,100)
 box7 .shapeColor="purple"

 box8 = createSprite(0,310,40,100)
 box8 .shapeColor="violet"

 box9 = createSprite(389,100,20,100)
 box9 .shapeColor="lightgreen"

 box10 = createSprite(0,100,50,100)
 box10.shapeColor="indigo"

  Edges = createEdgeSprites();

}

function draw() 
{
  background("black");

  if(keyIsDown(LEFT_ARROW)){
    ball.velocityX = -4
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.velocityX = 4
  }
  if(keyIsDown(UP_ARROW)){
    ball.velocityY = -4
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.velocityY = 4
  }

 if(ball.isTouching(box1)){
   ball.shapeColor="blue"
 }
 if(ball.isTouching(box2)){
  ball.shapeColor="white"
}
if(ball.isTouching(box3)){
  ball.shapeColor="yellow"
}
if(ball.isTouching(box4)){
  ball.shapeColor="green"
}
if(ball.isTouching(box5)){
  ball.shapeColor="lightblue"
}
if(ball.isTouching(box6)){
 ball.shapeColor="orange"
}
if(ball.isTouching(box7)){
 ball.shapeColor="purple"
}
if(ball.isTouching(box8)){
 ball.shapeColor="violet"
}
if(ball.isTouching(box9)){
  ball.shapeColor="lightgreen"
 }
 if(ball.isTouching(box10)){
  ball.shapeColor="indigo"
 }

  ball.bounceOff(box1);
  ball.bounceOff(box2);
  ball.bounceOff(box3);
  ball.bounceOff(box4);
  ball.bounceOff(box5);
  ball.bounceOff(box6);
  ball.bounceOff(box7);
  ball.bounceOff(box8);
  ball.bounceOff(box9);
  ball.bounceOff(box10);
  
  ball.bounceOff(Edges);
   
  drawSprites();

}




