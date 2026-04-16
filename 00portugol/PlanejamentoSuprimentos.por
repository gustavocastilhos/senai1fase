programa {
  funcao inicio() {
    inteiro quantidadeDeShows, bombasPorShow, bombasTotaisNecessarias
    real precoPorBomba, dinheiroParaCompraDasBombas
    bombasPorShow = 7
    escreva("Digite a quantidade de shows marcados: ")
		leia(quantidadeDeShows)
     escreva("Digite o preço de cada bomba: ")
		leia(precoPorBomba)
    bombasTotaisNecessarias = quantidadeDeShows * bombasPorShow
    dinheiroParaCompraDasBombas = bombasTotaisNecessarias * precoPorBomba
    escreva("A quantidade de bombas necessarias é de: " + bombasTotaisNecessarias + ", e a quantidade de dinheiro necessario para compras as bombas é de: " + dinheiroParaCompraDasBombas )
  }
}
