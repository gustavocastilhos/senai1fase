
function inicio() {
    let salario = parseFloat(prompt("Digite o salario: "));
    let moradia = parseFloat(prompt("Digite o custo de moradia: "));
    let agua = parseFloat(prompt("Digite o custo de agua: "));
    let luz = parseFloat(prompt("Digite o custo de luz: "));
    let internet = parseFloat(prompt("Digite o custo de intenet: "));
    let gasolina = parseFloat(prompt("Digite o custo de gasolina: "));
    let streamings = parseFloat(prompt("Digite o custo de streamings: "));
    let telefone = parseFloat(prompt("Digite o custo de telefone: "));
    let outros = parseFloat(prompt("Digite os outros custos: "));
    let totalDasContas = moradia + agua + luz + internet + gasolina + streamings + telefone + outros;
    let sobrouDoSalario = salario - totalDasContas;
    alert("No fim do mês sobrou: " + sobrouDoSalario);
}

inicio();