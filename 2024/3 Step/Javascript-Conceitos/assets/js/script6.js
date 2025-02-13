console.log('------------------------------');
// While
console.log(`---------- Laço While -----------`);

//declarando as variáveis
let numerosSorteados;
let totalSorteio = 1;

//declarando o for
for (let i = 0; i <= 9; i++) {

    //sorteando os números
    numerosSorteados = Math.ceil(Math.random() * 100);

    // fazendo o while para verificar se o número não é par
    while(numerosSorteados % 2 !== 0)
    {
        //quando número ímpar, entra e refaz o sorteio
        numerosSorteados = Math.ceil(Math.random() * 100);

        //somando 1 cada vez que fizer novo sorteio
        totalSorteio++;        
    }
    
    //exibindo os números sorteados
    console.log(`Números sorteados: ${numerosSorteados}`);
}

//exibindo a quantidade de sorteios
console.log(`Quantidade de sorteios realizados:
${totalSorteio}`);

console.log('----------- prompt ---------------');
//pedir ao usuário a digitação do número 7

// let numero = Number(prompt('Digite o número 7.')); // tudo que vem do usuário é string, por isso temos que converter para number

// while(numero !== 7) {
//     numero = Number(prompt(`Erro! Digite somente o número 7!`));
// } // só sai do while quando o usuário digitar no número correto! diferente do if

// console.log(`Número digitado ${numero}`);

console.log('----------- juros ---------------');
// jutos em doze meses

let mes = 1;
let valor = 10000;
let juros = 0.05;
let total = 0;

while(mes <= 12) {
    total += valor * juros;
    mes++;
  }

console.log(`Total investido: ${valor}`);
console.log(`Total de juros: ${total}`);
console.log(`Valor final ao término da aplicação: ${total+valor}`);

console.log('------------------------------');
// Do While
console.log(`---------- Do/While -----------`);

//declarando a variável 
let contagem = 10;

//iniciando o loop
do {

 //exibindo a mensagem
 console.log(`Fazendo a contagem em: ${contagem}`);

 //criando o if para ver se a contagem chegou em 0
 if (contagem === 0) {

     //exibir a mensagem quando chegar em 0
     console.log('Final da contagem');
 }

 // fazendo o decremento do contador
 contagem--;
}

//definindo a condição para o loop parar
while (contagem >= 0);

console.log('------------------------------');
console.log('----- verificação de senha -----');

let senha = ' ';

do {
    senha = prompt('Digite a sua senha:');
} while (senha !== 'senha123');
alert(`Acesso Permitido!`);


console.log('----- produto em estoque -----');

let produtoEmEstoque = 10;
do {
    console.log('Ainda temos esse produto em estoque');
    console.log(`Quantidade em estoque: ${produtoEmEstoque}`);
    produtoEmEstoque--;

    if(produtoEmEstoque === 4) {
        alert('Atenção!! Estoque está baixo, temos apenas 04 produtos.');
    }
}while(produtoEmEstoque >= 0);
console.log(`Atenção, produto indisponível - Estoque = 0`);

