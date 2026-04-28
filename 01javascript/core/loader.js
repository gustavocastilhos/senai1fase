// Loader para Side Quests 1 (movido para core)
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
    // Normaliza o caminho para suportar data-src com ou sem prefixos (ex: "01javascript/")
    let normalized = src;
    const marker = 'sideQuests1/';
    const idx = src.indexOf(marker);
    if (idx !== -1) normalized = src.slice(idx);

    switch (normalized) {
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
      default:
        // Caso não bata com nenhum conhecido, tenta chamar a função baseada no nome do arquivo (sem pasta)
        try {
          const base = normalized.split('/').pop().replace(/\.js$/, '');
          // mapear nomes conhecidos para funções
          const map = {
            'calculadoraDeImc': 'calcularIndiceMassaCorporal',
            'conversorDeTemperatura': 'executarConversor',
            'decisaoDeCompra': 'executarDecisaoDeCompra',
            'idadeDoCachorro': 'executarIdadeDoCachorro',
            'verificandoVotacao': 'executarVerificacaoVotacao'
          };
          const fnName = map[base];
          if (fnName && typeof window[fnName] === 'function') window[fnName]();
        } catch (e) {
          // silencioso — se não encontrar, nada a fazer
        }
        break;
    }
  };
  document.body.appendChild(scriptElement);
});

// Nota: este arquivo depende do HTML conter o elemento #sidequests-list com botões
