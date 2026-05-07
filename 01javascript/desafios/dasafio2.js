function desafio2() {   
 let salario = parseFloat(prompt("Digite o valor do seu salário atual:"));
 let valorDoimprestimo = parseFloat(prompt("Digite o valor do empréstimo que deseja solicitar:"));
 let parcelas = parseInt(prompt("Digite o número de parcelas para pagamento:"));

 if (isNaN(salario) || isNaN(valorDoimprestimo) || isNaN(parcelas)) {
     alert("Erro: Por favor, insira valores numéricos válidos.");
     return;
 }
 
 let valorParcela = valorDoimprestimo / parcelas;
 if (valorParcela > salario * 0.3) {
     document.getElementById('resultado').innerHTML = "Empréstimo não aprovado. O valor da parcela excede 30% do seu salário.";
 } else {
     document.getElementById('resultado').innerHTML = "Empréstimo aprovado. O valor da parcela será: " + valorParcela.toFixed(2);
 }

}