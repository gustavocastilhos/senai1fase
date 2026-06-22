let palavraQualquer = "Otorrinolaringologista";
let contadorDeO = 0;

for (let i = 0; i < palavraQualquer.length; i++) {
    if (palavraQualquer[i].toLowerCase() === "o") {
        contadorDeO++;
    }
}

console.log(`A palavra analisada tem ${contadorDeO} letra(s) "o".`);