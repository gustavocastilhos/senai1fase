programa {
  funcao inicio() {
  inteiro precoDoItem, saldo
  escreva("Quanto custa o seu item?: ")
  leia(precoDoItem)
  escreva("Qual é o seu saldo?:")
  leia(saldo)
  
  se(precoDoItem < saldo){
  escreva("Parabéns você tem capacidade financeira para comprar o seu item!")
  }
  senao{
    escreva("Infelizmente suas capacidades financeiras não são o suficiente para comprar este item!")
  }
  }
}
