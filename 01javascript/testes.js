// alert("Ola mundo!")

let nome 
let idade
// idade = 20
// nome = "Irineu"
// alert("O nome é:" + nome)
// alert("A idade é:" + idade)
// Substitui o conteúdo para um exemplo interativo simples no navegador

// ...existing code...


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
        const v = entrada.trim();
        if (/^\d+$/.test(v) && Number(v) > 0) return Number(v);
        if (!confirm("Idade inválida. Deseja tentar novamente?")) return null;
    }
}

function pedirNota() {
    while (true) {
        const entrada = prompt("Digite a nota do aluno (0-10):");
        if (entrada === null) return null;
        const v = entrada.replace(",", ".").trim();
        const n = Number(v);
        if (!isNaN(n) && n >= 0 && n <= 10) return n;
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
// ...existing code...