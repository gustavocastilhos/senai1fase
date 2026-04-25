
function inicio() {
    let custoMensal = 2750;
    let recebidoDoacao = 640;
    let recebidoDizimo = 1342;
    let faltaPagar = custoMensal - recebidoDoacao - recebidoDizimo;
    console.log("Para pagar completamente os custos mensais falta " + faltaPagar + " reais");
}

inicio();