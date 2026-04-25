
function inicio() {
    let precoDaObra = parseFloat(prompt("Digite o quanto foi pago pela obra: "));
    let precoDeVenda = precoDaObra * 3;
    alert("O preço de venda devera ser de: " + precoDeVenda);
}

inicio();