// alert("Ola mundo!")

let nome 
let idade
// idade = 20
// nome = "Irineu"
// alert("O nome é:" + nome)
// alert("A idade é:" + idade)
// Substitui o conteúdo para um exemplo interativo simples no navegador

function pedirNome() {
    let nome = prompt("Qual o seu nome?");
    if (!nome || nome.trim() === "") {
        alert("Nome inválido. Tente novamente.");
        return;
    }
}

pedirNome();
// ...existing code...


idade = prompt("Digite sua idade:") 
let nota 
nota = prompt("Digite a nota do aluno:")

nota = Number(nota)

if (nota >= 7) {
alert(`O aluno ${nome} tem ${idade} anos e a nota é ${nota}, foi aprovado!` ) 
}else {
alert(`O aluno ${nome} tem ${idade} anos e a nota é ${nota}, foi reprovado!` ) 
}