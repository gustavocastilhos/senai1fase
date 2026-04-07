programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    real horasEstimadas, cobrancaPorHora = 350, cobrancaDoDenis = 500, valorTotal, lucro
    inteiro valor_inicial, valor_final,  quantidadeDeSorteios
    valor_inicial = 5
    valor_final = 20
		quantidadeDeSorteios = 1 
    
    para (inteiro i = 1; i <= quantidadeDeSorteios; i++)
		{
			horasEstimadas = u.sorteia(valor_inicial, valor_final)
			escreva("\nSorteio nº ", i, ": ", horasEstimadas)
		}
    escreva("\n")

    valorTotal = (horasEstimadas * cobrancaPorHora) + cobrancaDoDenis
    escreva("\nO valor cobrado será de: R$",valorTotal)
    lucro = valorTotal - cobrancaDoDenis
    escreva("\nO lucro final foi de: R$",lucro,"\n")
  }
}
