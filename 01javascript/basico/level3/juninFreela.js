
function inicio() {
    let cobrancaPorHora = 350;
    let cobrancaDoDenis = 500;
    let valor_inicial = 5;
    let valor_final = 20;
    let quantidadeDeSorteios = 1;
    let horasEstimadas;

    for (let i = 1; i <= quantidadeDeSorteios; i++) {
        horasEstimadas = sorteiaInteiro(valor_inicial, valor_final);
        console.log(`\nSorteio nº ${i}: ${horasEstimadas}`);
    }

    let valorTotal = (horasEstimadas * cobrancaPorHora) + cobrancaDoDenis;
    console.log(`\nO valor cobrado será de: R$ ${valorTotal}`);
    let lucro = valorTotal - cobrancaDoDenis;
    console.log(`\nO lucro final foi de: R$ ${lucro}\n`);
}

function sorteiaInteiro(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

inicio();
