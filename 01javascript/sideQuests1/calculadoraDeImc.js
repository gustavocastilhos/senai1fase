function pedirNumero(promptText, min = -Infinity, max = Infinity) {
  while (true) {
    const entrada = prompt(promptText);
    if (entrada === null) return null; // usuário cancelou
    const v = entrada.replace(',', '.').trim();
    const n = Number(v);
    if (!isNaN(n) && n > min && n <= max) return n;
    if (!confirm('Valor inválido. Deseja tentar novamente?')) return null;
  }
}

function pedirPeso() {
  return pedirNumero('Qual o seu peso em kg? (ex: 70.5)', 0, Infinity);
}

function pedirAltura() {
  return pedirNumero('Qual a sua altura em metros? (ex: 1.75)', 0, Infinity);
}

function classificarImc(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  return 'Obesidade grau III (mórbida)';
}

function calcularImc() {
  const peso = pedirPeso();
  if (peso === null) {
    alert('Operação cancelada.');
    return;
  }

  const altura = pedirAltura();
  if (altura === null) {
    alert('Operação cancelada.');
    return;
  }

  const imc = peso / (altura * altura);
  const classificacao = classificarImc(imc);

  const resultado = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`;
  alert(resultado);
}

calcularImc();
