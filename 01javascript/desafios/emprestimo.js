function desafio2() {   
 let salario = parseFloat(prompt("Digite o valor do seu salário atual:"));
 let valorDoimprestimo = parseFloat(prompt("Digite o valor do empréstimo que deseja solicitar:"));
 let parcelas = parseInt(prompt("Digite o número de parcelas para pagamento:"));
 let taxaMensal = 0.02; // Exemplo: 2% de juros ao mês

if (isNaN(salario) || salario <= 0 || 
    isNaN(valorDoimprestimo) || valorDoimprestimo <= 0 || 
    isNaN(parcelas) || parcelas <= 0) {
    
    alert("Erro: Por favor, insira valores numéricos maiores que zero.");
    return;
}
 let montanteTotal = valorDoimprestimo * Math.pow((1 + taxaMensal), parcelas);
 let valorParcela = montanteTotal / parcelas;
 if (valorParcela > salario * 0.3) {
    document.getElementById('resultado').innerHTML = `Empréstimo NEGADO. Com juros de ${(taxaMensal * 100)}%, a parcela seria R$ ${valorParcela.toFixed(2)}, excedendo 30% do salário.`;
 } else {
     document.getElementById('resultado').innerHTML = `Empréstimo APROVADO! <br> Total a pagar: R$ ${montanteTotal.toFixed(2)} <br> Valor da parcela: R$ ${valorParcela.toFixed(2)}`;
 }

}