
function inicio() {
    let quantidadeDeRacao = parseFloat(prompt("Digite a quantidade de ração desejada em gramas: "));
    let precoPorKiloDeRacao = 10;
    let precoFinalDaRacao = (quantidadeDeRacao / 1000) * 10;
    alert("O preço final é de: " + precoFinalDaRacao + " reais");
}

inicio();