
function pedirPrecoDoItem() {
  while (true) {
    const entrada = prompt('Quanto custa o seu item? (ex: 50)');
    if (entrada === null) return null;
    const valorFormatado = entrada.replace(',', '.').trim();
    const numeroConvertido = Number(valorFormatado);
    if (!isNaN(numeroConvertido) && numeroConvertido >= 0) return numeroConvertido;
    if (!confirm('Preço inválido. Deseja tentar novamente?')) return null;
  }
}

function pedirSaldo() {
  while (true) {
    const entrada = prompt('Qual é o seu saldo? (ex: 100)');
    if (entrada === null) return null;
    const valorFormatado = entrada.replace(',', '.').trim();
    const numeroConvertido = Number(valorFormatado);
    if (!isNaN(numeroConvertido)) return numeroConvertido;
    if (!confirm('Saldo inválido. Deseja tentar novamente?')) return null;
  }
}

function executarDecisaoDeCompra() {
  const precoDoItem = pedirPrecoDoItem();
  if (precoDoItem === null) {// alert('Operação cancelada.');
     return; }

  const saldo = pedirSaldo();
  if (saldo === null) { //alert('Operação cancelada.');
     return; }

  if (precoDoItem <= saldo) {
      document.getElementById('resultado').innerHTML = `Você pode comprar o item.`;  
  } else {
    document.getElementById('resultado').innerHTML = `Infelizmente suas capacidades financeiras não são o suficiente para comprar este item!`;
  }
}

// Removida execução automática para permitir execução via botão no HTML
