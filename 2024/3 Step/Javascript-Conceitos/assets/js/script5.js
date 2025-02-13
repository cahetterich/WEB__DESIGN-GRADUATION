console.log('------------------------------');
//Laço For
console.log(`---------- Laço For -----------`);

let início; //breve explicação
let fim;

for (variável = início; variável < fim; incremento++){
    //Bloco de comandos que será repetido
}

console.log('------------------------------');

for (let i = 0; i <= 9; i++) {
console.log(i); // exibe do 0 ao 9
}

console.log('------------------------------------');
console.log('---- numeros sorteados + somas ----');

//declarando as variáveis
let totalSoma = 0;
let totalPares = 0;
let totalImpares = 0
let numerosSorteados;

//criando o for
for (let i = 0; i <= 9; i++) {

    //sorteando os números
    numerosSorteados = Math.ceil(Math.random() * 100);

    //fazendo a somatória
    totalSoma += numerosSorteados;

    //verificando se o número é par ou ímpar
    if (numerosSorteados % 2 === 0) {

	   //caso par somando 1 na variável totalPares
        totalPares++;
    }

    else {
	   //caso ímpar somando 1 na variável totalImpares
        totalImpares++;
    }

    //exibindo os números no console
    console.log(`Números sorteados: ${numerosSorteados}`);
}
//finalizando o for

//exibindo as informações no console
console.log(`Quantidade de números pares: ${totalPares}`);
console.log(`Quantidade de números ímpares: ${totalImpares}`);
console.log(`Somatória dos números sorteados: ${totalSoma}`);

console.log('----- 20 números sorteados --------');

for (let i = 0; i <= 19; i++) {
console.log(`Número Sorteado: ${Math.floor(Math.random()*999)}`); // sorteia 20 números de 0 a 999
}

console.log('------------------------------');
//tabuada de um número random
console.log(`---------- tabuada random ----------`);

const numero = Math.ceil(Math.random()*9);

for(let i = 0; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero*i}`);
}

console.log('--------------------------------');
//tabuada de todos os número  - For alinhado
console.log(`--- tabuada todos os números ---`);

for(let i = 0; i <= 10; i++) {
    console.log(`Tabuada do ${i}`);

    for(let j = 0; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log('--------------------------------');
}

