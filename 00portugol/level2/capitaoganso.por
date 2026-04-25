programa {
  funcao inicio() {
    real gastos, faturamentoIngressos, faturamentoItens
    escreva("Digite os gastos: ")
		leia(gastos)
		escreva("Digite o faturamento de ingressos: ")
		leia(faturamentoIngressos)
    escreva("digite o faturamento de itens: ")
    leia(faturamentoItens)
    real lucro = -gastos + (faturamentoIngressos + faturamentoItens)
    real lucroPercentual =  (lucro / gastos) * 100
    escreva("\nLucro foi de:" + lucro + "reais")
    escreva("\nO lucro percentual foi de:" + lucroPercentual+ "%")
   
  }
}
