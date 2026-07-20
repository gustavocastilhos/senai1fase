const nomes = [
  "Lúcio Fernando", "Rivaldo Jesus", "Mônica", "Capitão Ganso", "Peba",
  "Gill Bates", "Dona Bete", "Kowalski", "Heitor Tuga", "Junin",
  "Padre Ernan Buco", "GENéZio", "Bilu", "Waldisney", "Tião"
];

let idades = [22, 33, 32];

let produtos = ["Meia", "Pá de corte", "Suco de manga", "Leite"];
let precos = [665.9999, 777, 12, 4];


function verProdutosComPrecos(){
    
    // Limpa a div antes de mostrar a lista atualizada
    document.getElementById('listaProdutos').innerHTML = ""; 
    
    for(let i=0; i<produtos.length; i++){
        let j = i + 1;
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + 
        j + "°: " + produtos[i] + " R$ " + 
        precos[i].toFixed(2).replace('.', ',') 
        + 
        "</p>";
    } 
}

function verProdutos(){

    document.getElementById('listaProdutos').innerHTML = ""; 

    for(let i=0; i<produtos.length; i++){
        let j = i + 1;
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + j + "°: " + produtos[i] + "</p>";
    } 
}

function removerUltimoProduto() {
    if (produtos.length > 0) {
        produtos.pop();
        precos.pop();  
        
        verProdutosComPrecos(); 
    } else {
        alert("A lista já está vazia!");
    }
}

function aumentarPrecos300() {
    for (let i = 0; i < precos.length; i++) {

        precos[i] = precos[i] * 4;
    }
    verProdutosComPrecos();
}

function adicionarProduto() {
    let novoNome = prompt("Digite o nome do novo produto:");
    let precoDigitado = prompt("Digite o preço do produto (use ponto para centavos):");
    

    let novoPreco = parseFloat(precoDigitado);

    if (novoNome && !isNaN(novoPreco)) {
        produtos.push(novoNome); 
        precos.push(novoPreco);   
        
        verProdutosComPrecos();
    } else {
        alert("Operação cancelada ou dados inválidos!");
    }
}

function finalArray() {

const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
 
personagens.push("Gill Bates")
console.log(personagens)

}
//finalArray()
function inicioArray (){
const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];

personagens.unshift("Dona Bete")
console.log(personagens);

}
//inicioArray()
function revmUltimo(){
const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];

personagens.pop()
console.log(personagens);

}
//revmUltimo()
function remPrimeiro(){
    const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];

personagens.shift()
console.log(personagens);

}
//remPrimeiro()
function remUm(){
const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];

personagens.splice(2,1)
console.log(personagens);

}
//remUm()
function remDois(){
const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];

personagens.splice(3,2)
console.log(personagens);

}
//remDois()
function addFinal(){
const personagens = [
    "Peba",
    "Bilu",
    "Waldisney"
];
personagens.push("Padre Ernan Buco")
console.log(personagens)

}
//addFinal()
function addInicio(){
const personagens = [
    "Peba",
    "Bilu",
    "Waldisney"
];
personagens.unshift("GENéZio" , "Kowalski")
console.log(personagens);

}
//addInicio()
function acharIndice(){
    const personagens = [
    "Peba",
    "Bilu",
    "Waldisney",
    "GENéZio"
];

console.log(personagens.indexOf("Waldisney"));

}
//acharIndice()
function vereficaExistencia(){
    const personagens = [
    "Peba",
    "Bilu",
    "Waldisney",
    "GENéZio"
];
console.log(personagens.includes("Heitor Tuga"))

}
//vereficaExistencia()
function inverteArray(){
const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];
personagens.reverse()
console.log(personagens);

}
//inverteArray()
function remJunin(){
const personagens = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];
personagens.splice(1,1)
console.log(personagens);
}
//remJunin()
function addInicioEFinal(){
    const personagens = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];
personagens.push("Dona Bete");
personagens.unshift("Mônica");
console.log(personagens);
}
//addInicioEFinal()
function remUltEPrimeiro(){
const personagens = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];

    personagens.pop()
    personagens.shift()
console.log(personagens)
}
//remUltEPrimeiro()
function descobrirIndice(){
    const personagens = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];

console.log(personagens.indexOf("GENéZio"))


}
//descobrirIndice()
function descobrirSeExiste(){
    const personagens = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];
console.log(personagens.includes("Capitão Ganso"))

}
//descobrirSeExiste()
function remvDoisPrimeiros(){
const personagens = [
    "Bilu",
    "Mônica",
    "Gill Bates",
    "Junin",
    "Peba"
];
personagens.splice(0,2)
console.log(personagens);
}
//remvDoisPrimeiros()
function remvTresUltimos(){
    const personagens = [
    "Bilu",
    "Mônica",
    "Gill Bates",
    "Junin",
    "Peba"
];
personagens.splice(2,3)
console.log(personagens);


}
//remvTresUltimos()
function  addInicioEFinal2(){
    const personagens = [
    "Capitão Ganso",
    "Heitor Tuga",
    "Dona Bete"
];

personagens.push("Lúcio Fernando");
personagens.unshift("Gill Bates");
console.log(personagens);
}
//addInicioEFinal2()
function inverte(){
    const personagens = [
    "Padre Ernan Buco",
    "GENéZio",
    "Bilu",
    "Junin"
];
personagens.reverse()
console.log(personagens)


}
//inverte()
function remvDois(){
    const personagens = [
    "Lúcio Fernando",
    "Rivaldo Jesus",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];

personagens.splice(2,2)
console.log(personagens)

}
//remvDois()
function fazTudo(){
    const personagens = [
    "Tião",
    "Peba",
    "Waldisney"
];

personagens.push("Bilu")
personagens.unshift("Dona Bete")
personagens.pop()
personagens.reverse()
console.log(personagens)
}
//fazTudo()
function fazTudo2(){
    const personagens = [
    "Gill Bates",
    "Kowalski",
    "GENéZio",
    "Padre Ernan Buco",
    "Heitor Tuga"
];
console.log(personagens.includes("Kowalski"))
console.log(personagens.indexOf("Padre Ernan Buco"))
personagens.splice(2,1)
personagens.reverse()
console.log(personagens)
}
//fazTudo2()
