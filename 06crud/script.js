let dinos = []

function cadastrarDino(){
    const novoDino = {
        id: Date.now(),
        nome: document.getElementById("input-nome").value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value),
    }
    dinos.push(novoDino)
    console.log(dinos)
    limparFormulario()
}
function limparFormulario(){
        document.getElementById("input-nome").value = ""
        document.getElementById("input-altura").value = ""
        document.getElementById("input-cor").value = ""
        document.getElementById("input-custo").value =""

        document.getElementById("input-nome").focus()

}
function mostrarTodos(){
    

}
function testar(){
  dinos = [



  ]

}
