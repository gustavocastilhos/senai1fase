programa {
  funcao inicio() {
    inteiro precoDoPrompt, precoPorCaracterDoPrompt, quantidadeDeCaracters, totalDeTokens, precoPorToken, precoTotal
    precoDoPrompt = 5
    precoPorCaracterDoPrompt = 1
    escreva("Digite o preço por token: ")
		leia(precoPorToken)
    escreva("Digite a quantidade de caracters desejada no prompt: ")
		leia(quantidadeDeCaracters)
    totalDeTokens = precoDoPrompt + quantidadeDeCaracters
    precoTotal = totalDeTokens * precoPorToken
    escreva("A quantidade de tokens para fazer o seu prompt é de: " + totalDeTokens + ", e o preço total gasto será de: " + precoTotal)
  }
}
