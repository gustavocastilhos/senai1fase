programa {
  funcao inicio() {
  real temperaturaEmCelsius, temperaturaEmFahrenheit
   escreva("Escreva qual a temperatura em celsius: ")
   leia(temperaturaEmCelsius)
   temperaturaEmFahrenheit = (temperaturaEmCelsius - 32) * 5/9

   escreva("\n=======================================\n")
   escreva("A temperatura em fahrenheits é de: " + temperaturaEmFahrenheit)

 se (temperaturaEmFahrenheit > 68 )
 {
  escreva("\nEsta super calor!!")
     escreva("\n=======================================\n")

 }
 senao
 {
  escreva("\nNão esta muito quente.")
     escreva("\n=======================================\n")

 }
  }
}
