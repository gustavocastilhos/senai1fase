
function inicio() {
    let vitorias = parseFloat(prompt("Digite a quantidade de vitoriás: "));
    let empates = parseFloat(prompt("Digite a quantidade de empates: "));
    let pontosTotais = (vitorias * 3) + empates;
    alert("A quantidade total de pontos do time é de: " + pontosTotais);
}

inicio();