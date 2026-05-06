function verificarDiaDaSemana() {
    let numeroDia = parseInt(prompt("Insira um número de 1 a 7 para saber o dia da semana:"));
    let resultadoTexto;

    // Verificação de segurança: se o usuário cancelar ou não digitar um número válido
    if (isNaN(numeroDia)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Estrutura de decisão
    switch (numeroDia) {
        case 1:
            resultadoTexto = "Domingo";
            break;
        case 2:
            resultadoTexto = "Segunda-feira";
            break;
        case 3:
            resultadoTexto = "Terça-feira";
            break;
        case 4:
            resultadoTexto = "Quarta-feira";
            break;
        case 5:
            resultadoTexto = "Quinta-feira";
            break;
        case 6:
            resultadoTexto = "Sexta-feira";
            break;
        case 7:
            resultadoTexto = "Sábado";
            break;
        default:
            resultadoTexto = "Número inválido! Escolha um valor entre 1 e 7.";
    }

    document.getElementById('resultado').innerHTML = "O dia correspondente é: " + resultadoTexto;
}