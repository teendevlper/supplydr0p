const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball_options;
var helIMG,helicopter,ground,ball,supIMG,sup,sup_opt;

function preload(){
 helIMG = loadImage("helicopter2.png");
 supIMG = loadImage("pixil-frame-0 (5).png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution : 0.8
    }
    var sup_opt = {
        restitution : 0.5
    }
    
    helicopter = createSprite(-200,100,10,10);
    helicopter.addImage(helIMG,"helicopter2.png");
    helicopter.velocityX = 3;
    helicopter.scale = 0.5;
    
    sup = createSprite(-140,150,10,10);
    sup.addImage(supIMG,"pixil-frame-0 (5).png");
    sup.velocityX = 3;
    sup.scale = 2;
    
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,200,30,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);

    if(helicopter.x >= 530 && sup.x>= 530){
        helicopter.x = -200;
        sup.x = -200;
    }
     
    if(helicopter.x >=20){
        
    }
    if(keyDown("s")){
        sup.velocityX = 0;
        World.add(world,sup);
    }
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

 drawSprites();
}