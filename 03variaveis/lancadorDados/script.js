
let somaTotalDasRolagens = 0;
let resultadoUltimoDado = 0;

const elementoSomaTotal = document.getElementById('total');
const elementoUltimoDado = document.getElementById('ultimo');
const botaoResetar = document.getElementById('btn-reset');


function rolarDado(quantidadeDeLados) {
    const numeroSorteado = Math.floor(Math.random() * quantidadeDeLados) + 1;
    resultadoUltimoDado = numeroSorteado;
    somaTotalDasRolagens += numeroSorteado;

    elementoUltimoDado.innerText = resultadoUltimoDado;
    elementoSomaTotal.innerText = somaTotalDasRolagens;
}

botaoResetar.addEventListener('click', () => {
    somaTotalDasRolagens = 0;
    resultadoUltimoDado = 0;
    
    elementoUltimoDado.innerText = resultadoUltimoDado;
    elementoSomaTotal.innerText = somaTotalDasRolagens;
});