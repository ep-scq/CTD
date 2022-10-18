// Declaração de variaveis globais
var escolhaJogador
var escolhaMaquina
var placar = {

    jogador: 0,
    maquina: 0

}



// Função que verifica o Resultado da rodada
function verificarResultado() {

    if(escolhaJogador === escolhaMaquina) {

        alert('empatou :p')

    } else {

        if(
            (escolhaJogador === 1 && escolhaMaquina === 2) ||
            (escolhaJogador === 2 && escolhaMaquina === 3) ||
            (escolhaJogador === 3 && escolhaMaquina === 1)
        ) {

            alert('perdeu')
            placar.maquina++

        } else {

            alert('ganhou')
            placar.jogador++

        }

    }

}



// Função que inicia o Jogo
function comecarJogo() {

    obterEscolhaJogador()

    escolhaMaquina = parseInt(Math.random()*3+1)

    verificarResultado()
    verificarGanhador()

}



// Função que limpa o placar caso alguem ganhe
function limparPlacar() {

    placar.jogador = 0
    placar.maquina = 0

}



// Função que Finaliza o jogo caso alguem tenha ganho
function verificarGanhador() {

    if(placar.jogador === 2) {

        alert('parabens, voce é o ganhador :)')
        finalizarJogo()

    } else if(placar.maquina === 2) {

        alert('vish man, não foi dessa vez... programaram o bot no hard :(')
        finalizarJogo()

    } else {

        comecarJogo()

    }

}



// Função que finaliza o jogo mas da a opção de jogar novamente caso o Jogador queira
function finalizarJogo() {

    limparPlacar()

    let desejaContinuar = confirm('Deseja jogar novamente?')

    if(desejaContinuar) {

        comecarJogo()

    } else {

        alert('Obrigado por jogar')

    }

}

// Função que obtem e verifica a escolha do Jogador
function obterEscolhaJogador() {

    let escolha = parseInt(prompt('1-Pedra, 2-Papel, 3-Tesoura'))

    if(escolha > 0 && escolha < 4) {

        escolhaJogador = escolha

    } else {

        alert('Por favor, forneça um número de 1 à 3')
        obterEscolhaJogador()

    }

}

comecarJogo()