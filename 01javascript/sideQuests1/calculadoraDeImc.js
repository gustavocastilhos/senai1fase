function pedirNumero(promptText, min = -Infinity, max = Infinity) {
  while (true) {
    const entrada = prompt(promptText);
    if (entrada === null) return null; // usuário cancelou
    const valorFormatado = entrada.replace(',', '.').trim();
    const numeroConvertido = Number(valorFormatado);
    if (!isNaN(numeroConvertido) && numeroConvertido > min && numeroConvertido <= max) return numeroConvertido;
    if (!confirm('Valor inválido. Deseja tentar novamente?')) return null;
  }
}

function pedirPeso() {
  return pedirNumero('Qual o seu peso em kg? (ex: 70.5)', 0, Infinity);
}

function pedirAltura() {
  return pedirNumero('Qual a sua altura em metros? (ex: 1.75)', 0, Infinity);
}

function classificarIndiceMassaCorporal(indiceMassaCorporal) {
  if (indiceMassaCorporal < 18.5) return 'Abaixo do peso';
  if (indiceMassaCorporal < 25) return 'Peso normal';
  if (indiceMassaCorporal < 30) return 'Sobrepeso';
  if (indiceMassaCorporal < 35) return 'Obesidade grau I';
  if (indiceMassaCorporal < 40) return 'Obesidade grau II';
  return 'Obesidade grau III (mórbida)';
}

function calcularIndiceMassaCorporal() {
 const pesoKg = pedirPeso();
  if (pesoKg === null) {
  //  alert('Operação cancelada.');
    return;
  }

  const alturaM = pedirAltura();
 if (alturaM === null) {
 // alert('Operação cancelada.');
    return;
 }

  const indiceMassaCorporal = pesoKg / (alturaM * alturaM);
  const classificacao = classificarIndiceMassaCorporal(indiceMassaCorporal);

  const mensagemResultado = `Seu IMC é ${indiceMassaCorporal.toFixed(2)}. Classificação: ${classificacao}.`;
  alert(mensagemResultado);
}

// Removida execução automática para permitir execução via botão no HTML
