
var timer = document.getElementById("timer");
var botao = document.getElementById("botao");
var ticTac = false;
var cond = true;
var horas = 0;
var minutos = 0;
var segundos = 0;
var interval;



function Relogio() {
  var tic = new Audio('src/Tic.mp3');
 
  var tac = new Audio('src/Tac.mp3');

  if (cond) {

    interval = setInterval(() => {
      segundos++;

      if (ticTac) {
        tic.play()
        ticTac = false;
      } else {
        tac.play()
        ticTac = true;
      }

      if (segundos == 60) {
        segundos = 0;
        minutos += 1;

      }

      if (minutos == 60) {
        minutos = 0;
        horas += 1;
      }

      // Formatação com dois dígitos
      var horasFormatadas = horas < 10 ? "0" + horas : horas;
      var minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
      var segundosFormatados = segundos < 10 ? "0" + segundos : segundos;

      timer.innerHTML = horasFormatadas + ":" + minutosFormatados + ":" + segundosFormatados;
    }, 1000);
    cond = false
    botao.innerText = "Parar";
  }
  else {
    clearInterval(interval)
    cond = true
    botao.innerText = "Começar";
  }
}

function Zerar(){
 horas = 0;
 minutos = 0;
 segundos = 0;
 timer.innerHTML = "00:00:00"
}


// <audio id="music" loop src="sounds/music.wav" autoplay> </audio>
