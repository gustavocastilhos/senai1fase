programa {
  funcao inicio() {
    real peso, altura, resultadoImc

  escreva("Qual o seu peso?: ")
  leia(peso)
  escreva("Qual a sua altura?: ")
  leia(altura)

  resultadoImc = peso / (altura * altura)
   escreva("\n==================================\n")
  escreva("O resultado deu: "+resultadoImc)
  se(resultadoImc < 25){
      
       escreva("\nSeu imc esta abaixo de 25!")
      escreva("\n==================================\n")

  }
senao{
 
  escreva("\nSeu imc esta acima de 25!")
    escreva("\n==================================\n")

}
  }
}
