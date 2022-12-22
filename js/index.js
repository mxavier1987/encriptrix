function criptografar(){
    var texto = document.querySelector('.texto-puro').value;
    var criptografaTexto = window.btoa(texto);
    document.querySelector('#mensagem').innerHTML = criptografaTexto;
    drawCripto(criptografaTexto);
    mostrarLOG(criptografaTexto);
}

function descriptografar(){   
    var msg = document.querySelector('#mensagem').value;
    var descriptografaTexto = window.atob(msg);
    document.querySelector('#mensagem').innerHTML = descriptografaTexto;
    drawCripto(descriptografaTexto);
    mostrarLOG(descriptografaTexto);
}


function mostrarLOG(texto){
    return console.log(texto);
}



/*MATRIX CODE JS START HERE*/

var canvas = document.querySelector('canvas');
ctx = canvas.getContext( '2d' );
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");
var font_size = 10;
var columns = canvas.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++){
    drops[x] = 1;
}


function draw(){
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";//green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for(var i = 0; i < drops.length; i++){
      var text = matrix[Math.floor(Math.random()*matrix.length)];
      
      ctx.fillText(text, i*font_size, drops[i]*font_size);
      if(drops[i]*font_size > canvas.height && Math.random() > 0.975){
          drops[i] = 0;
      }
      drops[i]++;
  }
}

function drawCripto(text){
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";//green text
  ctx.font = font_size + "px arial";
  for(var i = 0; i < drops.length; i++){ 
      ctx.fillText(text, i*font_size, drops[i]*font_size);
      if(drops[i]*font_size > canvas.height && Math.random() > 0.975){
          drops[i] = 0;
      }
      drops[i]++;
  }
}

setInterval(draw, 25);

/*MATRIX CODE JS FINISH HERE*/