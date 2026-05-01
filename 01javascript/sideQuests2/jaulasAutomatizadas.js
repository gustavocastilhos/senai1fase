function executarLiberacaoJaula() {
    // Usamos parseInt() para converter o texto do prompt em um número inteiro
    let visitantesNaArea = parseInt(prompt("Qual a quantidade de visitantes na área?: "));
    
    // Verificação de segurança: se o usuário cancelar o prompt, para a função
    if (isNaN(visitantesNaArea)) {
        return; 
    }
    let horaAtual = parseInt(prompt("Qual a hora atual?: "));

    if (isNaN(horaAtual)) {
        return;
    }
    if (visitantesNaArea === 0 && (horaAtual < 8 || horaAtual > 18)) {
        document.getElementById('resultado').innerHTML = "Liberação autorizada. Abrindo jaula.";
    } else {
        document.getElementById('resultado').innerHTML = "Liberação negada. Área em uso ou fora do horário permitido.";
    }
}