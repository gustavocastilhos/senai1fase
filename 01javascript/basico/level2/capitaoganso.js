
function inicio() {
    let gastos = parseFloat(prompt("Digite os gastos: "));
    let faturamentoIngressos = parseFloat(prompt("Digite o faturamento de ingressos: "));
    let faturamentoItens = parseFloat(prompt("Digite o faturamento de itens: "));
    let lucro = -gastos + (faturamentoIngressos + faturamentoItens);
    let lucroPercentual = (lucro / gastos) * 100;
    alert("Lucro foi de:" + lucro + "reais\nO lucro percentual foi de:" + lucroPercentual + "%");
}


inicio();