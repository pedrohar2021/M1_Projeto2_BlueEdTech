console.clear();
const prompt = require('prompt-sync')();

let continuar = 'S'
while(continuar =='S'){

console.log('JOKENPO!');

let jokenpo = ['PEDRA', 'PAPEL', 'TESOURA']
let rodadas = +prompt('Quantas Rodadas iremos jogar? ')
let vitoriaJogador = 0
let vitoriaComputador = 0

for (let i = 0; i < rodadas; i++){
console.log(`VOCÊ PODE ESCOLHER:
[0] PEDRA
[1] PAPEL
[3] TESOURA`);

let jogador = +prompt('Qual é a sua escolha?')
let computador = Math.floor(Math.random() * 2) 
console.log(`Você escolheu: ${jokenpo[jogador]}`);   
console.log(`Computador escolheu: ${jokenpo[computador]}`);

if(computador == 0){
    if (jogador == 0){
        console.log('EMPATE!');
    }else if (jogador == 1){
        console.log('VOCÊ VENCEU!');
        vitoriaJogador++
    }else if (jogador == 2){
        console.log('VOCÊ PERDEU');
        vitoriaComputador++
    }else{
        console.log('INVÁLIDO');
    }
}else if(computador == 1){
    if (jogador == 0){
        console.log('VOCÊ PERDEU');
        vitoriaComputador++
    }else if (jogador == 1){
        console.log('EMPATOU');
    }else if (jogador == 2){
        console.log('VOCÊ GANHOU');
        vitoriaJogador++
    }else{
        console.log('INVÁLIDO');
    }
}else if(computador == 2){
    if (jogador == 0){
        console.log('VOCÊ PERDEU');
        vitoriaComputador++
    }else if (jogador == 1){
        console.log('EMPATOU!');
    }else if (jogador == 2){
        console.log('VOCÊ VENCEU');
        vitoriaJogador++
    }else{
        console.log('INVÁLIDO');
    }
}
}

console.log(`O computador ganhou ${vitoriaComputador} rodadas.`);
console.log(`O jogador ganhou ${vitoriaJogador} rodadas.`);

if (vitoriaJogador > vitoriaComputador){
    console.log('VOCÊ FOI O GRANDE CAMPEÃO. PARABÉNS! ');
}else if(vitoriaComputador > vitoriaJogador){
    console.log('VOCÊ PERDEU. HAHAHA, TENTE NOVAMENTE!');
}else{
    console.log('NÃO TIVEMOS VENCEDOR, DEU EMPATE! REVANCHE?');
}

continuar = prompt('Deseja continuar? [S/N}:').toUpperCase()
while(continuar != 'S' && continuar != 'N'){
    continuar = prompt('Deseja continuar? [S/N}:').toUpperCase() 
}
}

console.log('Você finalizou o programa. ');