programa {
  funcao inicio() {
    inteiro relatoriosPf , relatoriosPj = 33, tempoRelatoriosPf = 12, tempoRelatoriosPj = 42
    real valorRecebidoPorPf = 520.00 , valorRecebidoPorPj =635.00

    escreva("Qual a quntidade de relatorios Pf?: ")
    leia(relatoriosPf)

    escreva("Qual a quntidade de relatorios Pj?:")
    leia(relatoriosPj)

    inteiro quantidadeTotalDeRelatorios= relatoriosPf + relatoriosPj
    inteiro tempoTotalDeTrabalho = tempoRelatoriosPf * relatoriosPf + tempoRelatoriosPj *relatoriosPj
    inteiro valorTotalRecebido = valorRecebidoPorPf * relatoriosPf + valorRecebidoPorPj * relatoriosPj
    real mediaDeValorRecebidoPorRelatorioPf = valorRecebidoPorPf / relatoriosPf 
    real mediaDeValorRecebidoPorRelatorioPj = valorRecebidoPorPj / tempoRelatoriosPj
    //escreva(mediaDeValorRecebidoPorRelatorioPf)

    real mediaDeTempoPorRelatorioPf = tempoRelatoriosPf / relatoriosPf
    real mediaDeTempoPorRelatorioPj = tempoRelatoriosPj / relatoriosPj
    //escreva(mediaDeTempoPorRelatorioPj)

    escreva ("\nA quantidade total de relatórios é: "+ quantidadeTotalDeRelatorios)
    escreva ("\nO tempo total trabalhado foi de: " + tempoTotalDeTrabalho + " horas")
    escreva ("\nO valor total recebido foi de: "+ "R$" + valorTotalRecebido)
    escreva ("\nA media de valor recebido pelos relatorios PF foram de: "+ "R$"+ mediaDeValorRecebidoPorRelatorioPf +  " e pelos relatórios PJ foram de: "+ "R$" + mediaDeValorRecebidoPorRelatorioPj)
    escreva ("\nA media de tempo gasto por relatório PF foi de: "+ mediaDeTempoPorRelatorioPf + "horas e media de tempo gasto por relatórios PJ foi de: "+ mediaDeTempoPorRelatorioPj + "horas\n")
   
   se(mediaDeValorRecebidoPorRelatorioPf > mediaDeValorRecebidoPorRelatorioPj){
      se(relatoriosPf > relatoriosPj){
        escreva("Kowalski está investindo nos relatórios que trazem mais retorno financeiro!")
      }senao{
      escreva("Kowalski não está investindo nos relatórios que trazem mais retorno financeiro!")
       }
   }senao se( relatoriosPf < relatoriosPj ) {
    escreva("Kowalski está investindo nos relatórios que trazem mais retorno financeiro!")
   }senao{
    escreva("Kowalski não está investindo nos relatórios que trazem mais retorno financeiro!")
   }
  }
}
