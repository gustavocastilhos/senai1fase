programa {
  funcao inicio() {
    real quantidadeDeRacao, precoPorKiloDeRacao, precoFinalDaRacao
     escreva("Digite a quantidade de ração desejada em gramas: ")
		leia(quantidadeDeRacao) 
    precoPorKiloDeRacao = 10
    precoFinalDaRacao = (quantidadeDeRacao / 1000) * 10
    escreva("O preço final é de: "+ precoFinalDaRacao + " reais")

  }
}
