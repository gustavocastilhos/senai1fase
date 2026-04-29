// Verificando Votação

function pedirIdadeDoUsuario() {
  while (true) {
    const entrada = prompt('Qual sua idade?');
    if (entrada === null) return null;
    const valorFormatado = entrada.replace(',', '.').trim();
    const numeroConvertido = Number(valorFormatado);
    if (!isNaN(numeroConvertido) && Number.isInteger(numeroConvertido) && numeroConvertido >= 0) return numeroConvertido;
    if (!confirm('Idade inválida. Deseja tentar novamente?')) return null;
  }
}

function executarVerificacaoVotacao() {
  const idadeDoUsuario = pedirIdadeDoUsuario();
  if (idadeDoUsuario === null) { //alert('Operação cancelada.'); 
  return; }

  const idadeMinimaParaVotar = 16;
  if (idadeDoUsuario >= idadeMinimaParaVotar) {
    alert('Você pode votar!');
  } else {
    alert('Você ainda não pode votar.');
  }
}

// Removida execução automática para permitir execução via botão no HTML
