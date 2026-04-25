function inicio() {
    let relatoriosPf = parseInt(prompt("Qual a quantidade de relatórios Pf?: "));
    let relatoriosPj = parseInt(prompt("Qual a quantidade de relatórios Pj?: "));
    let tempoRelatoriosPf = 12;
    let tempoRelatoriosPj = 42;
    let valorRecebidoPorPf = 520.00;
    let valorRecebidoPorPj = 635.00;

    let quantidadeTotalDeRelatorios = relatoriosPf + relatoriosPj;
    let tempoTotalDeTrabalho = tempoRelatoriosPf * relatoriosPf + tempoRelatoriosPj * relatoriosPj;
    let valorTotalRecebido = valorRecebidoPorPf * relatoriosPf + valorRecebidoPorPj * relatoriosPj;
    let mediaDeValorRecebidoPorRelatorioPf = valorRecebidoPorPf / relatoriosPf;
    let mediaDeValorRecebidoPorRelatorioPj = valorRecebidoPorPj / relatoriosPj;
    let mediaDeTempoPorRelatorioPf = tempoRelatoriosPf / relatoriosPf;
    let mediaDeTempoPorRelatorioPj = tempoRelatoriosPj / relatoriosPj;

    console.log("\nA quantidade total de relatórios é: " + quantidadeTotalDeRelatorios);
    console.log("O tempo total trabalhado foi de: " + tempoTotalDeTrabalho + " horas");
    console.log("O valor total recebido foi de: R$" + valorTotalRecebido);
    console.log("A média de valor recebido pelos relatórios PF foi de: R$" + mediaDeValorRecebidoPorRelatorioPf + " e pelos relatórios PJ foi de: R$" + mediaDeValorRecebidoPorRelatorioPj);
    console.log("A média de tempo gasto por relatório PF foi de: " + mediaDeTempoPorRelatorioPf + " horas e média de tempo gasto por relatórios PJ foi de: " + mediaDeTempoPorRelatorioPj + " horas\n");

    if (mediaDeValorRecebidoPorRelatorioPf > mediaDeValorRecebidoPorRelatorioPj) {
        if (relatoriosPf > relatoriosPj) {
            console.log("Kowalski está investindo nos relatórios que trazem mais retorno financeiro!");
        } else {
            console.log("Kowalski não está investindo nos relatórios que trazem mais retorno financeiro!");
        }
    } else if (relatoriosPf < relatoriosPj) {
        console.log("Kowalski está investindo nos relatórios que trazem mais retorno financeiro!");
    } else {
        console.log("Kowalski não está investindo nos relatórios que trazem mais retorno financeiro!");
    }
}

inicio();
