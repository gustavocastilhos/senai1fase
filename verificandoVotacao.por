programa {
  funcao inicio() {
    inteiro idadeDoUsuario, elegivelParaVotar
    elegivelParaVotar = 16

    escreva("Qual sua idade?: ")
    leia(idadeDoUsuario)
    se(idadeDoUsuario >= elegivelParaVotar )
    {
       escreva("Você pode votar!")
    }
    senao {
      escreva ("Você ainda não pode votar.")
    }
  }
}
