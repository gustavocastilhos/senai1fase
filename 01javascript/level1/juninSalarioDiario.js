
function inicio() {
    let salarioMensal = parseFloat(prompt("Digite o salario mensal: "));
    let diasTrabalhados = parseInt(prompt("Digite os dias trabalhados por mes: "));
    let salarioPorDia = salarioMensal / diasTrabalhados;
    alert("O seu salario diario é de: " + salarioPorDia);
}

inicio();