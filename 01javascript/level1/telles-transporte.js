
function inicio() {
    let peso = parseFloat(prompt("Digite o peso: "));
    let distancia = parseFloat(prompt("Digite a distancia: "));
    let volume = parseFloat(prompt("Digite o volume: "));
    let frete = 15 + (2 * peso + 0.05 * distancia + 10 * volume);
    alert(frete);
    // soma = a + b
    // sub = a - b
    // mult = a * b
    // div = a / b
}

inicio();