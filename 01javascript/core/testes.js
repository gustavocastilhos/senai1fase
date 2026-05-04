// Copiado para core/testes.js

let nome;
let idade;
// Testa se a pessoa realmente digitou um nome de verdade (nada de deixar em branco ou só dar espaço).function pedirNome() 
  while (true) {
    const entrada = prompt("Qual o seu nome? (ex: João)");
    if (entrada && entrada.trim() !== "") return entrada.trim();
    if (!confirm("Nome inválido. Deseja tentar novamente?")) return null;
  }
z
// Testa se a idade faz sentido (tem que ser número inteiro e maior que zero, né?).function pedirIdade() 
  while (true) {
    const entrada = prompt("Digite sua idade: (ex: 25)");
    if (entrada === null) return null;
    const valorFormatado = entrada.trim();
    if (/^\d+$/.test(valorFormatado) && Number(valorFormatado) > 0) return Number(valorFormatado);
    if (!confirm("Idade inválida. Deseja tentar novamente?")) return null;
  }
// Testa se a nota tá certinha, arrumando a vírgula pro ponto pra não dar ruim, e checando se tá entre 0 e 10.
function pedirNota() {
  while (true) {
    const entrada = prompt("Digite a nota do aluno: (ex: 8.5)");
    if (entrada === null) return null;
    const valorFormatado = entrada.replace(",", ".").trim();
    const numeroNota = Number(valorFormatado);
    if (!isNaN(numeroNota) && numeroNota >= 0 && numeroNota <= 10) return numeroNota;
    if (!confirm("Nota inválida. Deseja tentar novamente?")) return null;
  }
}

nome = pedirNome();
if (!nome) {
  alert("Operação cancelada.");
  throw new Error("Nome não fornecido");
}

idade = pedirIdade();
if (idade === null) {
  alert("Operação cancelada.");
  throw new Error("Idade não fornecida");
}

let nota = pedirNota();
if (nota === null) {
  alert("Operação cancelada.");
  throw new Error("Nota não fornecida");
}

if (nota >= 7) {
  alert(`O aluno ${nome} tem ${idade} anos e a nota é ${nota}, foi aprovado!`);
} else {
  alert(`O aluno ${nome} tem ${idade} anos e a nota é ${nota}, foi reprovado!`);
}
