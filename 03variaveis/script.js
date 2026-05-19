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
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + totalVendas.toFixed(2);
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>';
    document.getElementById('inputVenda').value = '';
    document.getElementById('inputVenda').focus();
    
    console.log(valor);
}

function zerarContagemVendas() {
    total = 0; 
    
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$ 0.00';
    
    document.getElementById('listaVendas').innerHTML = ''; 
}
