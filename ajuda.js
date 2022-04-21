console.clear();
const prompt = require('prompt-sync')();

let numerosLista = []
let numerosPares = []
let numerosImpares = []

for (i = 1 ; i < 21 ; i++){
    let numeros = +prompt(`Digite o ${i}º número: `)
    numerosLista.push(numeros)
}

for (i = 0 ; i < numerosLista.length; i++){
    if(numerosLista[i] % 2 == 0){
        numerosPares.push(numerosLista[i])
    }else{
        numerosImpares.push(numerosLista[i])
    }
}


console.log(numerosLista);
console.log(numerosPares);
console.log(numerosImpares);

