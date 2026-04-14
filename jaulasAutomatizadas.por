programa {
  funcao inicio() {
    inteiro visitantesNaArea, horaAtual 

    escreva("Qual a quantidade de visitantes na área?: ")
    leia(visitantesNaArea)
    escreva("Qual a hora atual?: ")
    leia(horaAtual)

    se(visitantesNaArea == 0 e horaAtual < 8 ou horaAtual > 18){
    escreva("Liberação autorizada. Abrindo jaula")
    }senao{
     escreva("Liberação negada. Área em uso ou fora do horário permitido.")
    }

  }
}
