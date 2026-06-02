const dinos = [
    { id: 0, name: "T-Rex", emoji: "Rex 🦖" },
    { id: 1, name: "Tricerá", emoji: "Tri 🦕" },
    { id: 2, name: "Velocir", emoji: "Velo 🏃" },
    { id: 3, name: "Pterodá", emoji: "Pte 🦅" },
    { id: 4, name: "Estego", emoji: "Este 🛡️" },
    { id: 5, name: "Braquio", emoji: "Bra 🦒" },
    { id: 6, name: "Anquilo", emoji: "Anq 🧱" },
    { id: 7, name: "Espino", emoji: "Esp 🐊" },
    { id: 8, name: "Dilofo", emoji: "Dil 🦎" },
    { id: 9, name: "Alossau", emoji: "Alo 🐲" }
];

// Estado do sistema da Dona Bete
let totalArrecadado = 1000;      // Caixa inicial para permitir vitórias
let totalPremiosPagos = 0;       
const limitePremiosGlobal = 500; // Desafio 2
let rodadaGratisFalsa = false;   // Desafio 1a
let modoGolpe50x = false;        // Desafio 4
let selectedDinoIndex = null;

const dinoGrid = document.getElementById("dino-grid");
dinos.forEach((dino, index) => {
    const card = document.createElement("div");
    card.className = "dino-card";
    card.innerHTML = `<span class="dino-emoji">${dino.emoji.split(' ')[1]}</span><span class="dino-name">${dino.name}</span>`;
    card.addEventListener("click", () => selectDino(index));
    dinoGrid.appendChild(card);
});

function selectDino(index) {
    selectedDinoIndex = index;
    document.querySelectorAll(".dino-card").forEach((card, idx) => {
        card.classList.toggle("selected", idx === index);
    });
}

// Desafio 3: Escolha Aleatória (Surpresinha)
document.getElementById("btn-surpresinha").addEventListener("click", () => {
    const randomIdx = Math.floor(Math.random() * dinos.length);
    selectDino(randomIdx);
});

// Lógica de Aposta
document.getElementById("btn-apostar").addEventListener("click", () => {
    const betInput = document.getElementById("bet-amount");
    const betAmount = parseFloat(betInput.value);
    const resultText = document.getElementById("result-text");
    const drawnDisplay = document.getElementById("dino-drawn-display");
    const btn50x = document.getElementById("btn-50x");

    if (selectedDinoIndex === null) return alert("Escolha um dinossauro primeiro!");
    if (isNaN(betAmount) || betAmount <= 0) return alert("Insira uma aposta válida!");

    // Dinheiro entra em caixa!
    totalArrecadado += betAmount;

    const mult = modoGolpe50x ? 50 : 2;
    const premioPretendido = betAmount * mult;
    let sorteadoIndex = Math.floor(Math.random() * dinos.length);

    // Regras de negócio restritivas
    if (sorteadoIndex === selectedDinoIndex) {
        let autorizarGanho = true;

        if (rodadaGratisFalsa || modoGolpe50x) autorizarGanho = false;
        
        // Máquina verifica rentabilidade e os limites globais
        if (premioPretendido > (totalArrecadado * 0.20)) autorizarGanho = false;
        if ((totalPremiosPagos + premioPretendido) > limitePremiosGlobal) autorizarGanho = false;

        // Máquina altera o resultado sem o utilizador saber
        if (!autorizarGanho) {
            sorteadoIndex = (selectedDinoIndex + 1) % dinos.length;
        }
    }

    const dinoSorteado = dinos[sorteadoIndex];
    const dinoEscolhido = dinos[selectedDinoIndex];
    drawnDisplay.innerHTML = `Sorteado: <strong>${dinoSorteado.emoji}</strong> | O seu: <strong>${dinoEscolhido.emoji}</strong>`;

    if (sorteadoIndex === selectedDinoIndex) {
        totalArrecadado -= premioPretendido;
        totalPremiosPagos += premioPretendido;
        resultText.className = "win";
        resultText.innerText = `Parabéns! Acertou e ganhou R$${premioPretendido.toFixed(2)}! 🎉`;
        btn50x.style.display = "block"; // Desafio 4 - Mostra isca
    } else {
        resultText.className = "lose";
        resultText.innerText = "Desta vez não acertou! A Dona Bete agradece a sua participação. 🦖";
    }

    // Reset aos truques de uma única jogada
    if (modoGolpe50x) {
        modoGolpe50x = false;
        btn50x.style.display = "none";
    }
    rodadaGratisFalsa = false;
});

// Desafio 1 e 1a: Painel Secreto
document.getElementById("btn-secret").addEventListener("click", () => {
    const senha = prompt("Insira a senha mestra da Dona Bete:");
    if (senha === "6767") {
        alert(`--- RELATÓRIO DONA BETE ---\nCaixa Atual (Arrecadado): €${totalArrecadado.toFixed(2)}\nTotal Pago em Prémios: €${totalPremiosPagos.toFixed(2)}\nTeto Limite Máximo: €${limitePremiosGlobal.toFixed(2)}`);
    } else {
        alert("Senha errada! Mas parabéns... Ganhou uma RODADA GRÁTIS! 🎁 (Aproveite!)");
        rodadaGratisFalsa = true; // Próxima aposta perde sempre
    }
});

// Desafio 4: Ativação da Armadilha
document.getElementById("btn-50x").addEventListener("click", () => {
    modoGolpe50x = true;
    alert("SUPER MULTIPLICADOR ATIVADO! Escolha o seu próximo dino e aposte para tentar ganhar 50 vezes mais! 🤑🔥");
});