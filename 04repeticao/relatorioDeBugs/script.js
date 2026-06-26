function relatorio(){
let diasDeSprint = Number(prompt("Quantos dias tem o sprint? "))
 let totalDeBugs = 0
 let diaComMaisbugs = 0
 let diaComMenosbugs = 1000000
let queDiaMais = 0
let queDiaMenos
let textoRelatorio = "";
for(let i = 1; i <= diasDeSprint; i++){
    let bugsEncontrados = Number(prompt("Quantos bugs foram encontrados? "))

    if(bugsEncontrados > diaComMaisbugs){
        diaComMaisbugs = bugsEncontrados
        queDiaMais = i
    }
    if(diaComMenosbugs > bugsEncontrados){
        diaComMenosbugs = bugsEncontrados
        queDiaMenos = i
    }

    totalDeBugs += bugsEncontrados
    textoRelatorio += "Dia " + i + ": " + bugsEncontrados + " Bugs foram encontrados\n";
   

}
let bugsPorDia = totalDeBugs / diasDeSprint;

    textoRelatorio += "\n----------------------------------------\n";
    textoRelatorio += "Total de bugs encontrados: " + totalDeBugs + "\n";
    textoRelatorio += "Média de bugs por dia: " + bugsPorDia.toFixed(1) + "\n"; // .toFixed(1) limita a 1 casa decimal
    textoRelatorio += "O dia com mais bugs foi o dia " + queDiaMais + " com um total de " + diaComMaisbugs + " bugs\n";
    textoRelatorio += "O dia com menos bugs foi o dia " + queDiaMenos + " com um total de " + diaComMenosbugs + " bugs\n";

    document.getElementById('resultado').value = textoRelatorio;
}
