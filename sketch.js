var canvas;
var b1,b2,b3,b4;
var ball, edges;
var music;

var topEdge, bottomEdge, leftEdge, rightEdge;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,595);

    b1 = createSprite(0,580,360,30);
    b1.shapeColor = "blue";

    b2 = createSprite(295,580,200,30);
    b2.shapeColor = "green";

    b3 = createSprite(510,580,200,30);
    b3.shapeColor = "yellow";

    b4 = createSprite(725,580,200,30);
    b4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    //write code to add velocityX and velocityY

    ball.velocityX = -5;
    ball.velocityY = -5;

    topEdge = createSprite(400,1,800,2);
    topEdge.visible = false;

    leftEdge = createSprite(1,282.5,2,565);
    leftEdge.visible = false;

    rightEdge = createSprite(799,282.5,2,565);
    rightEdge.visible = false;
}

function draw() {
    background(rgb(169,169,169));

    if(bounceOff(ball, topEdge)) {
        ball.velocityX = ball.velocityX * (1);
        ball.velocityY = ball.velocityY * (-1);
    }

    if(bounceOff(ball, leftEdge)) {
        ball.velocityX = ball.velocityX * (-1);
        ball.velocityY = ball.velocityY * (1);
    }

    if(bounceOff(ball, rightEdge)) {
        ball.velocityX = ball.velocityX * (-1);
        ball.velocityY = ball.velocityY * (1);
    }

    //write code to bounce off ball from the block1 
    if(isTouching(b1, ball) && bounceOff(ball, b1)){
        ball.shapeColor = "blue";
        ball.velocityX = (ball.velocityX);
        ball.velocityY = -(ball.velocityY);
        music.play();
    }

    if(isTouching(b2, ball)){
        ball.shapeColor = "green";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(isTouching(b3, ball) && bounceOff(ball, b3)) {
        ball.shapeColor = "yellow";
        ball.velocityX = (ball.velocityX);
        ball.velocityY = -(ball.velocityY);
        music.play();
    }

    //write code to bounce off ball from the block4
    if(isTouching(b4, ball) && bounceOff(ball, b4)) {
        ball.shapeColor = "red";
        ball.velocityX = (ball.velocityX);
        ball.velocityY = -(ball.velocityY);
        music.play();
    }

    drawSprites();
}
