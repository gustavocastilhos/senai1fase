let diasDeSprint = Number(prompt("Quantos dias tem o sprint? "))
let tarefasFeitas = 0 
let totalTarefas = 0
for ( let i = 1; i <= diasDeSprint ; i++ ){

 tarefasFeitas = Number(prompt("Quantas tarefas foram feitas no dia " + i + "?"))
 
totalTarefas = totalTarefas + tarefasFeitas;
    document.getElementById('listaDosDias').innerHTML += "Dia " + i +  ": " + tarefasFeitas + " Tarefa(s) concluida(s)" + '<br>';
    document.getElementById('totalDeTarefas').innerHTML = 'Total de tarefas feitas:' + totalTarefas


}
 
    
