const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j =0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivol= new Date("2029-12-30T00:00:00");

contaderes[0].textContent = calculatTempo(tempoObjetivol);

function calculatTempo(tempoObjetivol){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivol - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60; 
    horas %= 60;

    return(dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos")
}

