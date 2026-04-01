programa {
  funcao inicio() {
    real vitorias, empates, pontosTotais
    escreva("Digite a quantidade de vitoriás: ")
		leia(vitorias)
		escreva("Digite a quantidade de empates: ")
    leia(empates)
    pontosTotais= (vitorias * 3) + empates
    escreva("A quantidade total de pontos do time é de: " + pontosTotais)
  }
}
