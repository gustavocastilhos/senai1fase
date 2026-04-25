
function inicio() {
    let quantidadeDeCaminhoes = parseInt(prompt("Digite a quantidade de caminhões: "));
    let cobrancaPorCaminhao = 450;
    let vendaPorJare = 90;
    let jaresPorCaminhao = 50;

    let vendaTotalPorTemporada = (vendaPorJare * jaresPorCaminhao) * quantidadeDeCaminhoes;
    let gastoTotalPorTemporada = quantidadeDeCaminhoes * cobrancaPorCaminhao;
    let lucroTotalPorTemporada = vendaTotalPorTemporada - gastoTotalPorTemporada;

    alert("O lucro total por temporada foi de: " + lucroTotalPorTemporada);
}

inicio();
