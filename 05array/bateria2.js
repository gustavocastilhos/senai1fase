//I'm only going to do the cool ones. (～￣▽￣)～

function addFinal(){
const pessoas = ["Dona Bete", "Junin", "Gael", "Mônika", "Gill Bates"];
pessoas.push("Capitão Ganso")
console.log(pessoas.includes("Mônika"))
console.log(pessoas)
}//addFinal()

function remvEdescobreOindice (){
    const empresas = [
  "Macrohard",
  "Hotel Téo",
  "Pizza Ruth",
  "HD Cimentos",
  "Navegano",
  "Roller Store",
  "Be a Bar",
  "Indra",
  "Acarajéssica",
  "Reciclaudio"
];
    empresas.shift()
    console.log(empresas.indexOf("HD Cimentos"))
    console.log(empresas)    

}
//remvEdescobreOindice()
function addErmv (){
const pessoas = ["Kowalski", "Heitor Tuga", "Bilu", "Rita Aline", "Caio Pontes", "PeBa"];
pessoas.unshift("Frei Dimão")
pessoas.pop()
console.log(pessoas)

}
//addErmv()
function rmvEverifica (){
        const empresas = [
  "Telles Transportes",
  "Rede Eco",
  "Pousada Ada",
  "Resort Orth",
  "Bergamota",
  "Amazonia",
  "Coxão do Santinho",
  "Casa de Pastel",
  "Rango Star",
  "Alibebe",
  "Ed Som",
  "Gê Estantes"
];
empresas.splice(5,1)
console.log(empresas);
console.log(empresas.includes("Amazonia"));


}
//rmvEverifica()
function invrtEProcura (){
    const pessoas = [
  "Márcia",
  "Mano Juca",
  "Lúcio Fernando",
  "Roque",
  "Yasmina",
  "Waldisney",
  "Lady Murphy"
];
pessoas.reverse()
console.log(pessoas.indexOf("Roque"));

}
//invrtEProcura()