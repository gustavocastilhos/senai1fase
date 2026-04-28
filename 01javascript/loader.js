// Loader para Side Quests 1 (arquivo movido para a raiz de 01javascript)
// Carrega scripts dinamicamente quando o usuário clica nos botões

document.getElementById('sidequests-list').addEventListener('click', function (e) {
  if (e.target.tagName !== 'BUTTON') return;
  const src = e.target.getAttribute('data-src');
  const existing = document.querySelector('script[data-loaded="' + src + '"]');
  if (existing) {
    // já carregado — reexecutar pedindo ao usuário para recarregar a página
    if (confirm('Este exercício já foi carregado. Deseja recarregar a página para executar novamente?')) location.reload();
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.src = src;
  scriptElement.setAttribute('data-loaded', src);
  scriptElement.onload = function () {
    // chamar a função principal após carregar cada script
    switch (src) {
      case 'sideQuests1/calculadoraDeImc.js':
        if (typeof calcularIndiceMassaCorporal === 'function') calcularIndiceMassaCorporal();
        break;
      case 'sideQuests1/conversorDeTemperatura.js':
        if (typeof executarConversor === 'function') executarConversor();
        break;
      case 'sideQuests1/decisaoDeCompra.js':
        if (typeof executarDecisaoDeCompra === 'function') executarDecisaoDeCompra();
        break;
      case 'sideQuests1/idadeDoCachorro.js':
        if (typeof executarIdadeDoCachorro === 'function') executarIdadeDoCachorro();
        break;
      case 'sideQuests1/verificandoVotacao.js':
        if (typeof executarVerificacaoVotacao === 'function') executarVerificacaoVotacao();
        break;
    }
  };
  document.body.appendChild(scriptElement);
});

// Nota: este arquivo depende do HTML conter o elemento #sidequests-list com botões
