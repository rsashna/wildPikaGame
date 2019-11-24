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
var bY=-ball.height;
var bX=Math.floor((Math.random() * (cvs.width-ball.width)) + 5);
var pikaX=120;
var pikaY=150;
var counter=100;
var score=0;
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
      // redraw background, pika and the ball
          ctx.drawImage(bg,0,0);
          ctx.drawImage(pika,pikaX,pikaY);
          ctx.drawImage(ball,bX,bY);
          bY += gravity;
          ctx.fillStyle = "#000";
          ctx.font = "16px Verdana";
          ctx.fillText("Score: "+score,5,cvs.height-20);
          if(checkCol()==1){
            location.reload();
          }else if((bY+ball.height)==cvs.height){
          nextLvl();
          }
          requestAnimationFrame(draw);
      }
function checkCol(){
  //returns 1 if collission occurs
  if((bY+ball.height)>=(cvs.height-ball.height+5) && (bX>=(pikaX-ball.width+5)) && (bX<=pikaX+pika.width-15))
  return 1;
  else {
    return 0;
  }
}
function nextLvl(){
  score++;
  bX=Math.floor((Math.random() * (cvs.width-ball.width)) + 5);
  bY=-ball.height;
  gravity+=0.5;
}
draw();
