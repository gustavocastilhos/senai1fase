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
            // Adicionei uma verificação de segurança para divisão por zero
            if (segundoNumero === 0) {
                resultadoCalculo = "Não é possível dividir por 0";
            } else {
                resultadoCalculo = primeiroNumero / segundoNumero;
            }
            break;
        default:
            alert("Operação inválida!");
            return;
        
    }
    document.getElementById('resultado').innerHTML = "O resultado da operação é: " + resultadoCalculo;
}