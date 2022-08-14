import Countdown from "./contdown.js";

const tempoParaOWWB = new Countdown('22 October 2022 15:00:00 GMT-0300');
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){

tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index]
});
}
mostrarTempo();
 setInterval(mostrarTempo, 1000);