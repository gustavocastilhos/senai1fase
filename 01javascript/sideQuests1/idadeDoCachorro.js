// Idade do Cachorro 

function pedirIdadeDoCachorro() {
  while (true) {
    const entrada = prompt('Qual a idade do seu cachorro? (em anos)');
    if (entrada === null) return null;
    const valorFormatado = entrada.replace(',', '.').trim();
    const numeroConvertido = Number(valorFormatado);
    if (!isNaN(numeroConvertido) && numeroConvertido >= 0) return numeroConvertido;
    if (!confirm('Idade inválida. Deseja tentar novamente?')) return null;
  }
}

function pedirSexoDoCachorro() {
  while (true) {
    const entrada = prompt('Seu cachorro é do sexo feminino ou masculino? (digite "feminino" ou "masculino")');
    if (entrada === null) return null;
    const resposta = entrada.trim().toLowerCase();
    if (resposta === 'feminino' || resposta === 'masculino') return resposta;
    if (!confirm('Resposta inválida. Deseja tentar novamente?')) return null;
  }
}

function executarIdadeDoCachorro() {
  const idadeDoCachorro = pedirIdadeDoCachorro();
  if (idadeDoCachorro === null) {// alert('Operação cancelada.');
   return; }

  const sexoDoCachorro = pedirSexoDoCachorro();
  if (sexoDoCachorro === null) { //alert('Operação cancelada.');
     return; }

  const anosHumanosPorAnoCachorro = 7;
  const idadeEmAnosHumanos = idadeDoCachorro * anosHumanosPorAnoCachorro;

  if (sexoDoCachorro === 'feminino') {
    if (idadeEmAnosHumanos > 62) {
      document.getElementById('resultado').innerHTML = `Seu cachorro pode se aposentar.`;  
    } else {
      document.getElementById('resultado').innerHTML = `Seu cachorro não pode se aposentar.`;  }
  } else {
    if (idadeEmAnosHumanos > 65) {
      document.getElementById('resultado').innerHTML = `Seu cachorro pode se aposentar.`;  
    }else {
     document.getElementById('resultado').innerHTML = `Seu cachorro não pode se aposentar.`;  }

    }
  }


// Removida execução automática para permitir execução via botão no HTML
