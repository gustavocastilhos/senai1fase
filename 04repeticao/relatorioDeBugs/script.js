function relatorio(){
let diasDeSprint = Number(prompt("Quantos dias tem o sprint? "))

for(let i = 1; i <= diasDeSprint; i++){
    let bugsEncontrados = Number(prompt("Quantos bugs foram encontrados? "))
    document.getElementById('listaDosDias').innerHTML += "Dia " + i +  ": " + bugsEncontrados + " Bugs foram encontrados" + '<br>';

}

}
