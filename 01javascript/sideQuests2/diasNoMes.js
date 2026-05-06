function verificarDiasNoMes() {
    let nomeMes = prompt("Digite o nome do mês (ex: Março):").toLowerCase().trim();
    let quantidadeDias;

    if (!nomeMes) {
        alert("Por favor, digite o nome de um mês.");
        return;
    }

    switch (nomeMes) {
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            quantidadeDias = 31;
            break;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            quantidadeDias = 30;
            break;
        case "fevereiro":
            quantidadeDias = "28 ou 29 (dependendo se o ano é bissexto)";
            break;
        default:
            quantidadeDias = null;
    }

    //resultado ou mensagem de erro
    if (quantidadeDias) {
        document.getElementById('resultado').innerHTML = `O mês de ${nomeMes} tem ${quantidadeDias} dias.`;
    } else {
        document.getElementById('resultado').innerHTML = "Mês inválido. Verifique a ortografia.";
    }
}