let object = {
    'tesoura': ['papel', 'lagarto'],
    'papel': ['pedra', 'spock'],
    'pedra': ['lagarto', 'tesoura'],
    'lagarto': ['spock', 'papel'],
    'spock': ['tesoura', 'pedra']
}

function Game(itemOne, itemTwo) {

    if (itemOne != itemTwo) {
        object[itemOne].includes(itemTwo) ? console.log('Jogador 1 ganhou') : console.log('Jogador 2 ganhou')
    }

    else {
        console.log('Empate!!')
    }
}

Game('spock', 'tesoura')
