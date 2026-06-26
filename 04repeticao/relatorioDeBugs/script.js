function relatorio(){
let diasDeSprint = Number(prompt("Quantos dias tem o sprint? "))
 let totalDeBugs = 0
 let diaComMaisbugs = 0
 let diaComMenosbugs = 1000000
let queDiaMais = 0
let queDiaMenos
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
    let bugsPorDia = totalDeBugs / diasDeSprint
    document.getElementById('listaDosBugs').innerHTML += "Dia " + i +  ": " + bugsEncontrados + " Bugs foram encontrados" + '<br>';
    document.getElementById('totalDeBugs').innerHTML = 'Total de bugs encontrados: ' + totalDeBugs;
    document.getElementById('BugsPorDia').innerHTML = 'Media de bugs por dia: ' + bugsPorDia;   
    document.getElementById('DiaComMaisBugs').innerHTML = 'O dia com mais bugs foi o dia '+queDiaMais+" com um total de "+diaComMaisbugs+" bugs";   
    document.getElementById('DiaComMenosBugs').innerHTML = 'O dia com menos bugs foi o dia '+queDiaMenos+" com um total de "+diaComMenosbugs+" bugs";   



}
}
