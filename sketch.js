function setup(){
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.debug=true;
  fixedRect = createSprite(600,300,70,70);
  fixedRect.debug=true;

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ) {
     fixedRect.shapeColor="green";
      movingRect.shapeColor="blue";
      

     } 
     else{
      fixedRect.shapeColor="yellow";
      movingRect.shapeColor="red";
     }


  drawSprites();
}