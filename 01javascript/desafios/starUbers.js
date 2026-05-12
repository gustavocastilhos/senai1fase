function desafio1() {
    let distanciaEmKm = parseFloat(prompt("Digite a distância em quilômetros:"));
    let velocidade = 300000; // velocidade da luz em km/s

    let tempoTotal = distanciaEmKm / velocidade;
    let resultado = "Tempo: " + tempoTotal.toFixed(2) + " segundos";

    if (tempoTotal > 60) {
        let segundosRestantes = tempoTotal;

        let anos = Math.floor(segundosRestantes / 31536000);
        segundosRestantes %= 31536000;

        let dias = Math.floor(segundosRestantes / 86400);
        segundosRestantes %= 86400;

        let horas = Math.floor(segundosRestantes / 3600);
        segundosRestantes %= 3600;
        
        let minutos = Math.floor(segundosRestantes / 60);
        
        resultado += " ou ";
        if (anos > 0) resultado += anos + " anos, ";
        if (dias > 0) resultado += dias + " dias, ";
        if (horas > 0) resultado += horas + " horas ";
        if (minutos > 0) resultado += "e " + minutos + " minutos";
    }

    document.getElementById('resultado').innerHTML = resultado + ".";
}