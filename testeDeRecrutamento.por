programa {
  funcao inicio() {
   cadeia sabeNadar, temRecomendacao 
   inteiro idade
   
  escreva("Qual a idade do aspirante a marujo?: ") 
  leia(idade)
  escreva("O aspirante a marujo sabe nadar?: ")
  leia(sabeNadar)
  escreva("O aspirante a marujo tem recomendação?: ")
  leia(temRecomendacao)
   se(idade > 16 e sabeNadar == "sim"){
    escreva("Aprovado para o navio!")
    }senao se(sabeNadar == "nao" ou sabeNadar == "sim"  e  temRecomendacao == "sim" e "Sim" e idade >= 14){
    escreva("Aprovado sob recomendação. Monitorar nas primeiras viagens")
    }senao{
    escreva("Reprovado. Volte quando estiver mais preparado para o mar.")
   }


  }
}
