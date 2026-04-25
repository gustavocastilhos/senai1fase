
function inicio() {
    let bombasPorShow = 7;
    let quantidadeDeShows = parseInt(prompt("Digite a quantidade de shows marcados: "));
    let precoPorBomba = parseFloat(prompt("Digite o preço de cada bomba: "));
    let bombasTotaisNecessarias = quantidadeDeShows * bombasPorShow;
    let dinheiroParaCompraDasBombas = bombasTotaisNecessarias * precoPorBomba;
    alert("A quantidade de bombas necessarias é de: " + bombasTotaisNecessarias + ", e a quantidade de dinheiro necessario para compras as bombas é de: " + dinheiroParaCompraDasBombas);
}

inicio();