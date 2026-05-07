function desafio1() {
let distanciaEmKm = parseFloat(prompt("Digite a distância em quilômetros:"));
let velocidade = 300000; // velocidade da luz em metros por segundo

    let tempoDeViagem = distanciaEmKm / velocidade;
    let resultado = "Tempo: " + tempoDeViagem.toFixed(2) + " segundos";
    switch (true) {
        case (tempoDeViagem > 31536000):
            resultado += " ou " + (tempoDeViagem / 31536000).toFixed(2) + " anos";
            break;
        case (tempoDeViagem > 2592000):
            resultado += " ou " + (tempoDeViagem / 2592000).toFixed(2) + " meses";
            break;
        case (tempoDeViagem > 86400):
            resultado += " ou " + (tempoDeViagem / 86400).toFixed(2) + " dias";
            break;
        case (tempoDeViagem > 3600):
            resultado += " ou " + (tempoDeViagem / 3600).toFixed(2) + " horas";
            break;
        case (tempoDeViagem > 60):
            resultado += " ou " + (tempoDeViagem / 60).toFixed(2) + " minutos";
            break;
       
                
    }
        document.getElementById('resultado').innerHTML =  resultado + ".";

}
    