
function inicio() {
    let precoDoPrompt = 5;
    let precoPorCaracterDoPrompt = 1;
    let precoPorToken = parseFloat(prompt("Digite o preço por token: "));
    let quantidadeDeCaracters = parseInt(prompt("Digite a quantidade de caracters desejada no prompt: "));

    let totalDeTokens = precoDoPrompt + quantidadeDeCaracters;
    let precoTotal = totalDeTokens * precoPorToken;

    alert("A quantidade de tokens para fazer o seu prompt é de: " + totalDeTokens + ", e o preço total gasto será de: " + precoTotal);
}

inicio();
