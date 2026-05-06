function executarCalculadoraSimples() {
    let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
    let segundoNumero = parseFloat(prompt("Digite o segundo número:"));
    
    // Verificação de segurança
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        alert("Erro: Por favor, insira valores numéricos válidos.");
        return;
    }

    let operacao = prompt("Escolha a operação: + (soma), - (subtração), * (multiplicação), / (divisão)");
    let resultadoCalculo;

    //Logica
    switch (operacao) {
        case "+":
            resultadoCalculo = primeiroNumero + segundoNumero;
            break;
        case "-":
            resultadoCalculo = primeiroNumero - segundoNumero;
            break;
        case "*":
            resultadoCalculo = primeiroNumero * segundoNumero;
            break;
        case "/":
        
    }

    // Exibição do resultado final no elemento HTML
    document.getElementById('resultado').innerHTML = "O resultado da operação é: " + resultadoCalculo;
}