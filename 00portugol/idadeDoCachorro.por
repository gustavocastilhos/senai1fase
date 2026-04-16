programa {
  funcao inicio() {
    inteiro idadeDoCachorro, anosHumanos, idadeDoCachorroEmAnosHumanos
    cadeia sexoDoCachorro
    anosHumanos = 7
    //um ano de cachorro equivale a sete anos humanos

    escreva("Qual a idade do seu cachorro?: ")
    leia(idadeDoCachorro)
    escreva("Seu cachorro é do sexo feminino ou masculino?: ")
    leia(sexoDoCachorro)
    idadeDoCachorroEmAnosHumanos = idadeDoCachorro * anosHumanos
    se(sexoDoCachorro == "feminino" ){
    se(idadeDoCachorroEmAnosHumanos > 62 )
    {
      escreva("Seu cachorro pode se aposentar")

    }
    senao{
        escreva("Seu cachorro não pode se aposentar :( ")
        }
    }
    senao{
         se(idadeDoCachorroEmAnosHumanos > 65)
        escreva("Seu cachorro pode se aposentar")
        senao{
          escreva("Seu cachorro não pode se aposentar :( ")
        }
        }
       
        
  }
}
