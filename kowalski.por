programa {
  funcao inicio() {
    inteiro relatoriosPf = 40
    inteiro relatoriosPj = 33
    inteiro tempoRelatoriosPf = 12
    inteiro tempoRelatoriosPj = 42
    real valorRecebidoPf = 2350.00
    real valorRecebidoPj = 8900.00
    inteiro quantidadeTotalDeRelatorios= relatoriosPf + relatoriosPj
    inteiro tempoTotalDeTrabalho = tempoRelatoriosPf + tempoRelatoriosPj
    inteiro valorTotalRecebido = valorRecebidoPf + valorRecebidoPj
    real mediaDeValorRecebidoPorRelatorioPf = valorRecebidoPf / relatoriosPf 
    real mediaDeValorRecebidoPorRelatorioPj = valorRecebidoPj / tempoRelatoriosPj
    //escreva(mediaDeValorRecebidoPorRelatorioPf)
    real mediaDeTempoPorRelatorioPf = tempoRelatoriosPf / relatoriosPf
    real mediaDeTempoPorRelatorioPj = tempoRelatoriosPj / relatoriosPj
    //escreva(mediaDeTempoPorRelatorioPj)
    escreva ("\nA quantidade total de relatórios é: "+ quantidadeTotalDeRelatorios)
    escreva ("\nO tempo total trabalhado foi de: " + tempoTotalDeTrabalho + " horas")
    escreva ("\nO valor total recebido foi de: "+ "R$" + valorTotalRecebido)
    escreva ("\nA media de valor recebido pelos relatorios PF foram de: "+ "R$"+ mediaDeValorRecebidoPorRelatorioPf +  " e pelos relatórios PJ foram de: "+ "R$" + mediaDeValorRecebidoPorRelatorioPj)
    escreva ("\nA media de tempo gasto por relatório PF foi de: "+ mediaDeTempoPorRelatorioPf + "horas e media de tempo gasto por relatórios PJ foi de: "+ mediaDeTempoPorRelatorioPj + "horas")

  }
}
