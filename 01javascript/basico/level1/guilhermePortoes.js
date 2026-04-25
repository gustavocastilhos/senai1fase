
function inicio() {
    let clt = parseInt(prompt("Digite o total de clt: "));
    let estagiario = parseInt(prompt("Digite o total de estagiarios: "));
    let pj = parseInt(prompt("Digite o total de pjs: "));
    let totalDevs = clt + estagiario + pj;
    alert(totalDevs);
}

inicio();