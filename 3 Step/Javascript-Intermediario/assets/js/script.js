console.log('---------------------------------------');
// Functions simples
console.log('--------- Functions simples -----------');

function soma() {
    let primeiroNumero = 20;
    let segundoNumero = 30;
    console.log(primeiroNumero + segundoNumero);
}
//argumento
soma (); // chamamos a função com argumento, para mostrar o console.log

console.log('---------------------------------------');
// Functions com parâmetros
console.log('------ Function com parâmetros --------');

function multiplica(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log(`O resultado da função é: ${resultado}`);
}
//argumentos
multiplica(10,2);
multiplica(9,5);

console.log('---------------------------------------');

function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

const resultadoFuncao = subtrair(45,40);
console.log(resultadoFuncao);

console.log('---------------------------------------');

function encontrarMaiorMenor() {
    let maior = 0;
    let menor = 100;

    // Gerar 10 números aleatórios entre 1 e 100
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 100) + 1;
        console.log(`Número gerado: ${num}`);

        //Compara o número gerado com o atual maior/menor número
        if (num > maior) {
            maior = num;
        }
        if (num < menor) {
            menor = num;
        }
    }

    console.log(`O maior número encontrado foi: ${maior}`);
    console.log(`O maior número encontrado foi: ${menor}`);
}

encontrarMaiorMenor();

console.log('---------------------------------------');

//criando a função com um parâmetro
function calcularTabuada(numero = 0) {
    console.log(`Fazendo a tabuada do ${numero}:`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
    console.log(`-----Fim da Tabuada----`);
}
//fim da função

//chamando a função e passando um argumento
calcularTabuada(8);


console.log('---------------------------------------');

function calcularRendimentos (valor, taxaJuros, tempo) {
    for (let i = 1; i <= tempo; i++) {
        valor += valor * taxaJuros; 
        console.log(`Rendimento no ${i}o.: R$ ${valor.toFixed(2)}`);
    }
}
calcularRendimentos(1000, 0.05, 5);

console.log('---------------------------------------');

function calcularPrecoUber (distancia, tempo) {
    const valorBase = 2.5;
    const valorKm = 1.3;
    const valorMin = 0.50;

    const precoDistancia = distancia * valorKm;
    const precoTempo = tempo * valorMin;
    const precoTotal = valorBase + precoDistancia + precoTempo;

    return precoTotal.toFixed(2);
}

let valorCorrida = calcularPrecoUber (40, 10);
console.log(`Sua viagem ficará em: R$ ${valorCorrida}`);
valorCorrida = calcularPrecoUber (20, 70);
console.log(`Sua viagem ficará em: R$ ${valorCorrida}`);

console.log('---------------------------------------');

console.log(`Função de conversão em Dólar`);
// criando a função
function conversaoDolar(valorReal, cotacao) {
    return (valorReal / cotacao);
}

// sorteando um valor para Reais
const valorReal = Math.floor(Math.random()*1000);
const cotacaoDolar = 5.23;


// criando a variável e chamando a função
const cotacaoDia = conversaoDolar(valorReal,cotacaoDolar);

//exibindo as informações no console
console.log(`Valor em Real = ${valorReal.toFixed(2)}`);
console.log(`Cotação Dólar = ${cotacaoDolar}`);
console.log(`Valor final em Dólar =
${cotacaoDia.toFixed(2)}`);

console.log('---------------------------------------');
