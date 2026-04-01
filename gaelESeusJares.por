programa {
  funcao inicio() {
    inteiro quantidadeDeCaminhoes
    real cobrancaPorCaminhao, vendaPorJare, jaresPorCaminhao, vendaTotalPorTemporada, gastoTotalPorTemporada, lucroTotalPortemporada
    
    escreva("Digite a quantidade de caminhões: ")
		leia(quantidadeDeCaminhoes)
    cobrancaPorCaminhao = 450
    vendaPorJare = 90
    jaresPorCaminhao = 50
    
    vendaTotalPorTemporada = (vendaPorJare * jaresPorCaminhao ) * quantidadeDeCaminhoes
    gastoTotalPorTemporada = quantidadeDeCaminhoes * cobrancaPorCaminhao
    lucroTotalPortemporada = vendaTotalPorTemporada - gastoTotalPorTemporada
    escreva("O lucro total por temporada foi de: "+ lucroTotalPortemporada)
    
   
		

  }
}
