// Conversor de Temperatura (Celsius <-> Fahrenheit)

function pedirTemperaturaCelsius() {
  while (true) {
    const entrada = prompt('Escreva qual a temperatura em Celsius:');
    if (entrada === null) return null; // usuário cancelou
    const valorFormatado = entrada.replace(',', '.').trim();
    const numeroConvertido = Number(valorFormatado);
    if (!isNaN(numeroConvertido)) return numeroConvertido;
    if (!confirm('Valor inválido. Deseja tentar novamente?')) return null;
  }
}

function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function mostrarResultado(temperaturaCelsius, temperaturaFahrenheit) {
  let mensagemResultado = '\n=======================================\n';
  mensagemResultado += `A temperatura em Fahrenheit é de: ${temperaturaFahrenheit.toFixed(2)}`;
  if (temperaturaFahrenheit > 68) {
    mensagemResultado += '\nEstá super calor!!';
  } else {
    mensagemResultado += '\nNão está muito quente.';
  }
  mensagemResultado += '\n=======================================\n';
      document.getElementById('resultado').innerHTML = `${mensagemResultado.replace(/\n/g, '<br>')}`;  
}

function executarConversor() {
  const temperaturaCelsius = pedirTemperaturaCelsius();
  if (temperaturaCelsius === null) {
    //alert('Operação cancelada.');
    return;
  }

  const temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);
  mostrarResultado(temperaturaCelsius, temperaturaFahrenheit);
}
// Removida execução automática para permitir execução via botão no HTML
