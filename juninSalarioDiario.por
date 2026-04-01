programa {
  funcao inicio() {
    real salarioMensal,  salarioPorDia
    inteiro diasTrabalhados
    escreva("Digite o salario mensal: ")
		leia(salarioMensal)
		escreva("Digite os dias trabalhados por mes: ")
    leia(diasTrabalhados)
    salarioPorDia = salarioMensal / diasTrabalhados
    escreva("O seu salario diario é de: " + salarioPorDia)
    
  }
}
