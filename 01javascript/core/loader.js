// Loader para Side Quests 1 (movido para core)
// Carrega scripts dinamicamente quando o usuário clica nos botões

// Helper: chama a função principal associada a um src (suporta src com ou sem prefixos)
function callMainFor(src) {
  const marker = 'sideQuests1/';
  let normalized = src;
  const idx = src.indexOf(marker);
  if (idx !== -1) normalized = src.slice(idx);

  const map = {
    'sideQuests1/calculadoraDeImc.js': 'calcularIndiceMassaCorporal',
    'sideQuests1/conversorDeTemperatura.js': 'executarConversor',
    'sideQuests1/decisaoDeCompra.js': 'executarDecisaoDeCompra',
    'sideQuests1/idadeDoCachorro.js': 'executarIdadeDoCachorro',
    'sideQuests1/verificandoVotacao.js': 'executarVerificacaoVotacao',
    // also allow calling by base filename
    'calculadoraDeImc': 'calcularIndiceMassaCorporal',
    'conversorDeTemperatura': 'executarConversor',
    'decisaoDeCompra': 'executarDecisaoDeCompra',
    'idadeDoCachorro': 'executarIdadeDoCachorro',
    'verificandoVotacao': 'executarVerificacaoVotacao'
  };

  // try full normalized path first
  if (map[normalized] && typeof window[map[normalized]] === 'function') {
    window[map[normalized]]();
    return true;
  }

  // try base name
  const base = normalized.split('/').pop().replace(/\.js$/, '');
  if (map[base] && typeof window[map[base]] === 'function') {
    window[map[base]]();
    return true;
  }

  // fallback: try to call a function that matches the base filename
  if (typeof window[base] === 'function') {
    window[base]();
    return true;
  }

  return false;
}

document.getElementById('sidequests-list').addEventListener('click', function (e) {
  if (e.target.tagName !== 'BUTTON') return;
  const src = e.target.getAttribute('data-src');
  const existing = document.querySelector('script[data-loaded="' + src + '"]');
  if (existing) {
    // já carregado — apenas (re)executa a função principal sem recarregar
    const invoked = callMainFor(src);
    if (!invoked) {
      // se a função principal não estiver disponível por algum motivo, recarrega o script forçando cache-bust
      const scriptElement = document.createElement('script');
      scriptElement.src = src + '?_=' + Date.now();
      scriptElement.setAttribute('data-loaded', src + '?_=' + Date.now());
      scriptElement.onload = function () { callMainFor(src); };
      document.body.appendChild(scriptElement);
    }
    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.src = src;
  scriptElement.setAttribute('data-loaded', src);
  scriptElement.onload = function () { callMainFor(src); };
  document.body.appendChild(scriptElement);
});

// Nota: este arquivo depende do HTML conter o elemento #sidequests-list com botões
