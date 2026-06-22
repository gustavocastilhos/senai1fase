// garantindo que o código só rode após o HTML carregar
document.addEventListener("DOMContentLoaded", function() {
    // Conecta o botão do HTML à função de iniciar o jogo
    const botao = document.getElementById('btnIniciar');
    botao.addEventListener('click', iniciarJogo);
});

//função para exibir o resultado no HTML mudando o display para block
function mostrarFinal(texto) {
    const divResultado = document.getElementById('resultadoFinal');
    divResultado.innerHTML = "<h3>FIM DE JOGO</h3><p>" + texto + "</p>";
    divResultado.style.display = 'block';
}

function iniciarJogo() {
    //esconde a div de resultado caso o jogador jogue novamente
    document.getElementById('resultadoFinal').style.display = 'none';

    // 0: A motivação
    alert("0: A MOTIVAÇÃO\nRoque teve a ideia de criar um festival de música pela internet, chamado Rock in Reels. Ele comentou com seus amigos da Banda Jota Qwert e eles exigiram ser a primeira banda a tocar! Mas ele precisa convidar mais músicos para conseguir patrocínios.");

    // 01: Primeiro convite
    let escolha01 = prompt("01: PRIMEIRO CONVITE: TIAS FOFINHAS\nVisitando as Tias Fofinhas (cover de Tears for Fears), Roque ouviu a exigência: 50 toalhas de crochê no camarim. Mas o evento é virtual e não tem camarim.\n\nRoque deve:\n1 - Falar a verdade\n2 - Mentir");

    if (escolha01 === "1") {
        // 02: Verdade; Yasmina
        let escolha02 = prompt("02: A VERDADE\nRoque foi sincero. Elas apreciaram e prometeram levar as próprias toalhas. Além disso, indicaram 'Yasmina e os Manos' (grupo de rap). Roque fala com eles, mas Yasmina exige que o grupo seja marcado em TODAS as fotos de divulgação.\n\nRoque deve:\n1 - Aceitar\n2 - Rejeitar");
        
        if (escolha02 === "1") {
            // 04: Aceitar Yasmina; HT
            let escolha04 = prompt("04: SUCESSO VIRAL\nRoque aceita e o evento viraliza assustadoramente! Com o sucesso, uma banda desconhecida chamada 'Horrível Trio' se oferece para tocar músicas relaxantes. Roque tem medo de dar sono no público.\n\nRoque deve aceitar o Horrível Trio?\n1 - Sim\n2 - Não");
            
            if (escolha04 === "1") {
                // 08: Aceita HT; amazonia
                let escolha08 = prompt("08: A GRANDE PROPOSTA\nO Horrível Trio é um sucesso! Jeferson Bezerra, CEO da big tech amazonia, adorou e quer reprisar o evento em sua nova rede social por muito dinheiro. PORÉM, ele quer cortar as bandas cover (Jota Qwert e Tias Fofinhas) por medo de direitos autorais.\n\nRoque deve aceitar a proposta e cortar as bandas originais?\n1 - Sim\n2 - Não");
                
                if (escolha08 === "1") {
                    // 10: Corta covers
                    alert("10: O CANCELAMENTO\nO corte das bandas originais cria uma onda de revoltas. O festival sofre um enorme cancelamento e nunca mais volta a acontecer.");
                    mostrarFinal("Você traiu suas raízes. O evento foi cancelado pelo público e sua reputação foi arruinada.");
                } else if (escolha08 === "2") {
                    // 11: Mantém covers
                    alert("11: FIDELIDADE RECOMPENSADA\nRoque nega a proposta. Jeferson Bezerra usa sua influência e consegue a liberação dos covers. O festival é um sucesso estrondoso e os contatos para uma nova edição fervem!");
                    
                    // FASE EXTRA (INVENTADA: 12)
                    let escolha12 = prompt("12: O PATROCÍNIO DE PLÁSTICO (FASE BÔNUS)\nCom o sucesso mundial, uma marca de guitarras de plástico reciclado oferece 2 milhões para patrocinar a próxima edição. A única exigência é mudar o nome do festival para 'Plastick in Reels'.\n\nRoque deve aceitar?\n1 - Sim, dinheiro é tudo!\n2 - Não, a essência do Rock in Reels fica!");

                    if (escolha12 === "1") {
                        alert("13: PLASTICK IN REELS\nO festival vira o evento mais lucrativo do planeta, mas Roque percebe que virou um engravatado que não curte mais a própria música.");
                        mostrarFinal("Você ficou rico, mas o 'Plastick in Reels' perdeu a alma do Rock. Sucesso financeiro, fracasso artístico.");
                    } else if (escolha12 === "2") {
                        alert("14: A LENDA INDEPENDENTE\nRoque rejeita o dinheiro de plástico. Os fãs ficam tão emocionados com a atitude que fazem um crowdfunding gigante que financia o festival para sempre!");
                        mostrarFinal("PARABÉNS! Você criou um festival lendário, independente e com a alma intacta!");
                    } else {
                        alert("Opção inválida. O jogo foi encerrado.");
                    }
                } else {
                    alert("Opção inválida. O jogo foi encerrado.");
                }
            } else if (escolha04 === "2") {
                // 09: Rejeita HT
                alert("09: NICHO ALCANÇADO\nRoque não arrisca. O evento tem alguma relevância pelas redes de Yasmina, mas não decola. Na próxima edição, vira apenas um festival de Rap mantendo o nome.");
                mostrarFinal("O evento sobreviveu, mas mudou totalmente de identidade e nunca atingiu seu potencial máximo.");
            } else {
                 alert("Opção inválida. O jogo foi encerrado.");
            }
        } else if (escolha02 === "2") {
            // 05: Rejeitar Yasmina
            alert("05: OPORTUNIDADE PERDIDA\nRoque rejeita a proposta de Yasmina. O evento não viraliza. Duas boas bandas tocam, mas o evento nunca explode.");
            mostrarFinal("Faltou ousadia nas redes sociais. O Rock in Reels foi apenas um show comum de fim de semana.");
        } else {
             alert("Opção inválida. O jogo foi encerrado.");
        }

    } else if (escolha01 === "2") {
        // 03: Mentir; Lucio Fernando
        let escolha03 = prompt("03: A MENTIRA DESCOBERTA\nRoque mente sobre as toalhas. Elas descobrem, ficam decepcionadas e desistem. A banda Jota Qwert também pula fora. Abatido, o pai de Roque (Lucio Fernando) oferece dinheiro e um estúdio incrível via contrato pela empresa Meia Meia Meia, mas Roque nunca quis depender do pai.\n\nRoque deve assinar o contrato?\n1 - Sim\n2 - Não");
        
        if (escolha03 === "1") {
            // 07: Aceitar o contrato
            alert("07: SUCESSO SOMBRIO\nRoque coloca o orgulho de lado, assina o contrato e realiza o evento. O festival atinge um sucesso gigantesco, porém somente no submundo da música.");
            mostrarFinal("Você vendeu seus ideais familiares e artísticos. Alcançou o sucesso, mas a um custo pessoal questionável.");
        } else if (escolha03 === "2") {
            // 06: Não assinar o contrato
            alert("06: REDENÇÃO E PERDÃO\nRoque não aceita o dinheiro. Sem bandas e sem festival, ele faz um mini show solo (Roda de Roque). Triste por ter mentido, compõe a música 'Perdão'. As Tias Fofinhas assistem, choram com a emoção genuína e o perdoam, prometendo voltar ao projeto!");
            mostrarFinal("Um passo para trás, dois para frente. A sinceridade da sua música salvou suas amizades e o futuro do Rock in Reels!");
        } else {
             alert("Opção inválida. O jogo foi encerrado.");
        }
    } else {
        alert("Opção inválida. Poxa, tente digitar 1 ou 2 na próxima vez!");
    }
}