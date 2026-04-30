// Declaração das variáveis
let sabeNadar, temRecomendacao, idade;

// Entrada de dados
idade = parseInt(prompt("Qual a idade do aspirante a marujo?: "));
sabeNadar = prompt("O aspirante a marujo sabe nadar?: ").toLowerCase();
temRecomendacao = prompt("O aspirante a marujo tem recomendação?: ").toLowerCase();

// Lógica de decisão
if (idade > 16 && sabeNadar === "sim") {
    alert("Aprovado para o navio!");
} else if ((sabeNadar === "nao" || sabeNadar === "sim") && temRecomendacao === "sim" && idade >= 14) {
    alert("Aprovado sob recomendação. Monitorar nas primeiras viagens");
} else {
    alert("Reprovado. Volte quando estiver mais preparado para o mar.");
}
