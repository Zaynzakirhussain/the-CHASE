const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,bal10,ball20,ball30,vgrd;
var truck,truck1,truck2,truck3,truck4,truck5,truckw,truckw2,truckw3,gun,gun1,bul,score;


function setup(){
    createCanvas(1360,650);
    engine = Engine.create();
    world = engine.world;

    vgrd = createSprite(680,640,2760,20);
    vgrd.shapeColor = "grey";
    vgrd.x = vgrd.width/2;

    var ground_options ={
      isStatic: true
    }
    ground = Bodies.rectangle(680,637,1360,20,ground_options);
    World.add(world,ground);

    var ball_options ={
      restitution: 0.8
    }
    
    ball = Bodies.circle(1357,10,7,ball_options);
    World.add(world,ball);

    var ball11_options ={
      restitution: 0.8
    }
    
    ball11 = Bodies.circle(800,2000,7,ball11_options);
    World.add(world,ball11);

    var ball22_options ={
      restitution: 0.8
    }
    
    ball22 = Bodies.circle(1050,200,7,ball22_options);
    World.add(world,ball22);

    var ball33_options ={
      restitution: 0.8
    }
    
    ball33 = Bodies.circle(1140,200,7,ball33_options);
    World.add(world,ball33)

    truck1 = createSprite(290,595,28,18);
    truck1.shapeColor = "black";
    truck = createSprite(290,614,28,23);
    truck.shapeColor = "lightblue";
    truck3 = createSprite(215,603,108,47);
    truck3.shapeColor = "lightblue";
    truck4 = createSprite(290,584,28,5);
    truck4.shapeColor = "lightblue";
    truck2 = createSprite(276,603,7,47);
    truck2.shapeColor = "grey";
    gun = createSprite(275,611,14,14);
    gun.shapeColor = "black";
    gun1 = createSprite(285,611,14,6);
    gun1.shapeColor = "black"
    truckw = createSprite(182,626,13,13);
    truckw.shapeColor = "black";
    truckw2 = createSprite(287,626,13,13);
    truckw2.shapeColor = "black";
    truckw3 = createSprite(198,626,13,13);
    truckw3.shapeColor = "black";
    truck5 = createSprite(215,595,108,10);
    truck5.shapeColor = "black";
    score = 0;

    
    truck1 = createSprite(1135,580,28,18);
    truck1.shapeColor = "black";
    truck = createSprite(1135,599,28,23);
    truck.shapeColor = "orange";
    truck4 = createSprite(1135,569,28,5);
    truck4.shapeColor = "orange";
    truck2 = createSprite(1121,588,7,47);
    truck2.shapeColor = "grey";
    truck5 = createSprite(1085,609,130,10);
    truck5.shapeColor = "black";

}
function draw(){
    background(25,0,50);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1360,20);
    console.log(score);

    text("JUST AN ANIMATION NOT A GAME",1000,20);
    text("the CHASE",650,400)

    ellipseMode(RADIUS);
    ellipse(ball11.position.x,ball11.position.y,7,7);

    
    ellipseMode(RADIUS);
    ellipse(ball22.position.x,ball22.position.y,10,10);

    
    ellipseMode(RADIUS);
    ellipse(ball33.position.x,ball33.position.y,10,10);

    ball.velocityX = -2;
    
    vgrd.velocityX = -10;
    if(vgrd.x < 0){
        vgrd.x = vgrd.width/2;
    }

  /*  if (truck.x - ball1.x < ball1.width/2 +truck.width/2 && ball1.x - truck.x < ball1.width/2 + truck.width/2 && truck.y - ball1.y < ball1.height/2 +truck.height/2 && ball1.y - truck.y < ball1.height/2 + truck.height/2){
      score = score + 1;
      ball1.lifetime = 1;
    }
    if (truck.x - ball2.x < ball2.width/2 +truck.width/2 && ball2.x - truck.x < ball2.width/2 + truck.width/2 && truck.y - ball2.y < ball2.height/2 +truck.height/2 && ball2.y - truck.y < ball2.height/2 + truck.height/2){
      score = score + 1;
      ball2.lifetime = 1;
    }
    if (truck.x - ball3.x < ball3.width/2 +truck.width/2 && ball3.x - truck.x < ball3.width/2 + truck.width/2 && truck.y - ball3.y < ball3.height/2 +truck.height/2 && ball3.y - truck.y < ball3.height/2 + truck.height/2){
      score = score + 1;
      ball3.lifetime = 1;
    }
*/
    if(frameCount % 155 === 0){
     
      var ball1 = createSprite(1234,54,21,21);
      ball1.shapeColor = "brown";
      ball1.velocityX = -10;
      ball1.position.x = ball.position.x;
      ball1.position.y = ball.position.y;
      ball1.lifetime = 102;
      
      if(ball1.lifetime = 102){
        //ball2.visible = false;
        score = score + 1;
      }
    }

    if(frameCount % 170 === 0){
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,7,7);
     
      var ball2 = createSprite(1234,54,21,21);
      ball2.shapeColor = "brown";
      ball2.velocityX = -10;
      ball2.position.x = ball.position.x;
      ball2.position.y = ball.position.y;
      ball2.lifetime = 102;
      
      if(ball2.lifetime = 102){
       // ball2.visible = false;
        score = score + 1;
      }
    }
          

    if(frameCount % 200 === 0){
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,7,7);
     
      var ball3 = createSprite(1234,54,21,21);
      ball3.shapeColor = "brown";
      ball3.velocityX = -10;
      ball3.position.x = ball.position.x;
      ball3.position.y = ball.position.y;
      ball3.lifetime = 102; 
      
      if(ball3.lifetime = 103){
       // ball2.visible = false;
        score = score + 1;
      }
    }


    if(keyDown("space")){
      var bul = createSprite(gun1.x + 15,gun1.y,12,6);
      bul.shapeColor = "yellow";
      bul.velocityX = 10;
      bul.lifetime = 160;
    }
    //////ball1.istouching(truck);

    text("MAERSK",215,603);
    //balll();
    
    text("score: "+score,20,20)
    //touch();
    light();

    drawSprites();
}

//function touch(){

//}
function light(){
    if(frameCount % 60 === 0){
      var stand = createSprite(1360,594,15,80);
      //stand.shapeColor = "black";
      stand.velocityX = -10;
      stand.lifetime = 150;
      var bulb = createSprite(1360,560,22,10);
      bulb.shapeColor = "orange";
      bulb.velocityX = -10;
      bulb.lifetime = 150;
    }
}