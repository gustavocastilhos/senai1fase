let i = 0; // inicialização
let total = 0;

while (i < 4) { // condição
    i++; // contagem
    let preco = Number(prompt(`Digite o preço do ${i}º produto`));
    
    if (isNaN(preco)) {
        preco = 0;
    }
    
    total = preco + total;
        document.getElementById("total").innerHTML += `${i}º preço do produto: R$ ${preco} <br>`;

}
        document.getElementById("total").innerHTML += "O total foi de: R$" +total+  "<br>";

alert(`Total da compra: R$ ${total}`);