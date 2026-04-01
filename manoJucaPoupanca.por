programa {
  funcao inicio() {
     real salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros, sobrouDoSalario, totalDasContas
    escreva("Digite o salario: ")
		leia(salario) 
    escreva("Digite o custo de moradia: ")
		leia(moradia) 
    escreva("Digite o custo de agua: ")
		leia(agua) 
    escreva("Digite o custo de luz: ")
		leia(luz) 
    escreva("Digite o custo de intenet: ")
		leia(internet) 
    escreva("Digite o custo de gasolina: ")
		leia(gasolina) 
    escreva("Digite o custo de streamings: ")
		leia(streamings)
    escreva("Digite o custo de telefone: ")
		leia(telefone) 
    escreva("Digite os outros custos: ")
		leia(outros)
    totalDasContas = moradia + agua + luz + internet +gasolina + streamings + telefone + outros 
    sobrouDoSalario = salario - totalDasContas
    escreva("No fim do mês sobrou: "+ sobrouDoSalario)
  }
}
