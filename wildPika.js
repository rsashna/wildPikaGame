var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
//images from src
var pika = new Image();
var ball = new Image();
var bg = new Image();
pika.src = "images/smD.png";
ball.src = "images/ball.png";
bg.src = "images/forrest.png";
//mostly useful variables
var gravity = 1.5;
var bY=0;
var bX=100;
var pikaX=120;
var pikaY=150;
var counter=100;
// audio files
//TODO music?
// var fly = new Audio();
// var scor = new Audio();
//
// fly.src = "sounds/fly.mp3";
// scor.src = "sounds/score.mp3";
// when right or left arrows are pressed
 document.addEventListener("keydown", function(event) {
   console.log(event);
            if (event.keyCode == 37){
              pikaX-=5;
            }
            else if (event.keyCode == 39){
              pikaX+=5;
            }
  });
  function draw(){
    // redraw backgroung, pika and the ball
        ctx.drawImage(bg,0,0);
        ctx.drawImage(pika,pikaX,pikaY);
        ctx.drawImage(ball,bX,bY);
        bY += gravity;
        ctx.fillStyle = "#000";
        ctx.font = "20px Verdana";
    //    ctx.fillText("Score : "+score,10,cvs.height-20);
        requestAnimationFrame(draw);
  }

draw();
