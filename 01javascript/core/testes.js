// Copiado para core/testes.js

let nome;
let idade;

function pedirNome() {
  while (true) {
    const entrada = prompt("Qual o seu nome?");
    if (entrada && entrada.trim() !== "") return entrada.trim();
    if (!confirm("Nome inválido. Deseja tentar novamente?")) return null;
  }
}

function pedirIdade() {
  while (true) {
    const entrada = prompt("Digite sua idade:");
    if (entrada === null) return null;
    const valorFormatado = entrada.trim();
    if (/^\d+$/.test(valorFormatado) && Number(valorFormatado) > 0) return Number(valorFormatado);
    if (!confirm("Idade inválida. Deseja tentar novamente?")) return null;
  }
}

function pedirNota() {
  while (true) {
    const entrada = prompt("Digite a nota do aluno (0-10):");
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
