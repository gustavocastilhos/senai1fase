// Loader para Side Quests 1
// Carrega scripts quando o usuario clica nos botoes

document.getElementById('sidequests-list').addEventListener('click', function (e) {
  if (e.target.tagName !== 'BUTTON') return;
  const src = e.target.getAttribute('data-src');
  const existing = document.querySelector('script[data-loaded="' + src + '"]');
  if (existing) {
    // ja carregado — reexecutar pedindo ao usuario para recarregar a pagina
    if (confirm('Este exercício já foi carregado. Deseja recarregar a página para executar novamente?')) location.reload();
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.src = src;
  scriptElement.setAttribute('data-loaded', src);
  scriptElement.onload = function () {
    // chamar a funçao principal apos carregar cada script
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
