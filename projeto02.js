console.clear();
const prompt = require('prompt-sync')();

let nome = prompt('Olá usuário, qual o seu primeiro nome? ')
console.log(`Seja bem vindo ${nome}, hoje vamos jogar o famoso \njogo do Pedra, Papel ou Tesoura... ou JO KEN PÔ!`);

let continuar = 'S'
while(continuar =='S'){

  let lista = ["pedra", "papel", "tesoura"];
  let vitoriaJogador = 0;
  let vitoriaComputador = 0;
  let empate = 0;

  console.log('\n<<<<--------------- jOkEnPô! --------------->>>>')

  let rodadas = +prompt('Quantas Rodadas iremos jogar? ');
  console.log(`Ok \n${nome}, vamos jogar ${rodadas} rodadas! `);
  console.log();

  for (let i = 0; i < rodadas; i++) {
    console.log(`<<-------------- ${i+1}ª RODADA --------------->>`);
    console.log('          PEDRA / PAPEL / TESOURA: \n');
    let jogador = prompt('Qual é a sua escolha? ').toLowerCase();
    while (jogador != "pedra" && jogador != "papel" && jogador != "tesoura") {
      console.log("Digite um valor válido.");
      jogador = prompt("PEDRA, PAPEL ou TESOURA: ").toLowerCase();
    }
    const computador = lista[Math.floor(Math.random() * lista.length)];

    console.log(`A escolha do computador foi ${computador}`);

    if (computador == "pedra") {
      if (jogador == "pedra") {
        console.log(`${i+1}ª rodada: EMPATE!`);
        empate++;
      } else if (jogador == "papel") {
        console.log(`${i+1}ª rodada: ${nome} VENCEU!`);
        vitoriaJogador++;
      } else if (jogador == "tesoura") {
        console.log(`${i+1}ª rodada: Computador VENCEU!`);
        vitoriaComputador++;
      }
    } else if (computador == "papel") {
      if (jogador == "pedra") {
        console.log(`${i+1}ª rodada: Computador VENCEU!`);
        vitoriaComputador++;
      } else if (jogador == "papel") {
        console.log(`${i+1}ª rodada: EMPATE!`);
        empate++;
      } else if (jogador == "tesoura") {
        console.log(`${i+1}ª rodada: ${nome} VENCEU!`);
        vitoriaJogador++;
      }
    } else if (computador == "tesoura") {
      if (jogador == "pedra") {
        console.log(`${i+1}ª rodada: ${nome} VENCEU!`);
        vitoriaJogador++;
      } else if (jogador == "papel") {
        console.log(`${i+1}ª rodada: Computador VENCEU!`);
        vitoriaComputador++;
      } else if (jogador == "tesoura") {
        console.log(`${i+1}ª rodada: EMPATE!`);
        empate++;
      }
    }
    console.log();
  }

  console.log(`${nome} ganhou ${vitoriaJogador} rodada(s).`);
  console.log(`O computador ganhou ${vitoriaComputador} rodada(s).`);
  console.log(`Houve um empate em ${empate} rodada(s).`);
  console.log();
  console.log('O GANHADOR FOI ↴ ');
  console.log();

  if(vitoriaJogador > vitoriaComputador){
      console.log(`Você, parabéns ${nome}!`)
  }else if(vitoriaJogador < vitoriaComputador){
      console.log('O computador ganhou desta vez!')
  }else{
      console.log('Não tivemos vencedor, empatou. Revanche?');
  }

  console.log();

  continuar = prompt('Deseja jogar novamente? [S/N]:').toUpperCase()
  while(continuar != 'S' && continuar != 'N'){
    continuar = prompt('Deseja jogar novamente?? [S/N]:').toUpperCase() 
  }
}

console.log('Você finalizou o programa. ');
