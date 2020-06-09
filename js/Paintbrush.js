var canvas;
var ctx;
var flag = false;
var del = false;
var ready = function(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.onmousedown = drawStart;
  canvas.onmousemove = drawing;
  window.onmouseup = drawEnd;

  resize();
}

function w1(){
  ctx.lineWidth = 0.1;
  del = false;
}
function w5(){
  ctx.lineWidth = 5;
  del = false;
}
function w15(){
  ctx.lineWidth = 15;
  del = false;
}

function erase() {
  del = true;
}

function resize() {
  ctx.canvas.width = window.innerWidth - 100;
  ctx.canvas.height = window.innerHeight - 100;
}

function drawStart(event){
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  var xpos = event.target.offsetLeft;
  var ypos = event.target.offsetTop;
  ctx.moveTo(event.clientX-xpos, event.clientY-ypos);
  flag = true;
}

function drawing(event){
  if(flag) {
    var xpos = event.target.offsetLeft;
    var ypos = event.target.offsetTop;
    ctx.lineCap = 'round'

    if(del) {
      ctx.clearRect(event.clientX-xpos-20, event.clientY-ypos-20, 50, 50);
    } else {
      ctx.lineTo(event.clientX-xpos, event.clientY-ypos);
    }

    ctx.stroke();
  }
}

function drawEnd(event){
  flag = false;
}

function news() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
