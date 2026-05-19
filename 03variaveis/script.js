let cont = 0;

function incrementarContagem() {
    cont = cont + 1;
    document.getElementById("p-contagem").innerHTML = cont;
}

function adicionarDez() {
    cont = cont + 10;
    document.getElementById("p-contagem").innerHTML = cont;
}

function adicionarSessemtaSete() {
    cont = cont + 67;
    document.getElementById("p-contagem").innerHTML = cont;
}
function zerarContagem(){
cont = 0
document.getElementById("p-contagem").innerHTML = cont;

}
function registrarVenda(){
 let valor = Number(document.getElementById("imputVendas").value)
 
console.log(valor);
}

let totalVendas = 0;

function registrarVenda() {
    let valor = Number(document.getElementById('inputVenda').value);
    totalVendas = totalVendas + valor;
    document.getElementById('p-total').innerHTML = totalVendas;
    document.getElementById('inputVenda').value = "";
    console.log(valor);
} // <--- A função registrarVenda termina obrigatoriamente AQUI

function zerarContagemVendas() {
    totalVendas = 0; 
    document.getElementById("p-total").innerHTML = totalVendas; 
}
