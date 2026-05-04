
function testeDeRecrutamento() {
// Declaração das variáveis
let sabeNadar, temRecomendacao, idade;

// Entrada de dados
idade = parseInt(prompt("Qual a idade do aspirante a marujo?: (ex: 100)"));
sabeNadar = prompt("O aspirante a marujo sabe nadar?: (sim/nao) ").toLowerCase();
temRecomendacao = prompt("O aspirante a marujo tem recomendação?:(sim/nao) ").toLowerCase();

//Lógica
if (idade > 16 && sabeNadar === "sim") {
      document.getElementById('resultado').innerHTML = `Aprovado. Bem-vindo ao mar!`;  
} else if ((sabeNadar === "nao" || sabeNadar === "sim") && temRecomendacao === "sim" && idade >= 14) {
    document.getElementById('resultado').innerHTML = `Aprovado sob recomendação. Monitorar nas primeiras viagens`;
} else {
    document.getElementById('resultado').innerHTML = `Reprovado. Volte quando estiver mais preparado para o mar.`;
}
}