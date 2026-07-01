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