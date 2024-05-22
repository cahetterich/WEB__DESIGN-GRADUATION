
console.log('------------------------------');
//Objeto Math
console.log(`---- Estrutura If - Else ----`);

const numeroSorteado = Math.floor(Math.random() * 100);
console.log(`Número sorteado: ${numeroSorteado}`);
if (numeroSorteado % 2 === 0){
    console.log(`O número ${numeroSorteado} é par!!!`);
}
else {
    console.log(`O número ${numeroSorteado} é ímpar!!!`);
}

console.log('-------------------------------------');

const precoProduto = 100;
const frete = 30.00;
let valorFinal = 0;
console.log(`Valor do carrinho: ${precoProduto}`);
console.log(`Valor do frete: ${frete} - FRETE GRÁTIS para compras acimda de 150`);

if (precoProduto <= 150) {
    valorFinal = precoProduto + frete;
    }
else {
     valorFinal = precoProduto;
}

console.log(`Valor a pagar: ${valorFinal}`);

// 6 minutos ---------------------estrutura if/else -----------------------------------------------***

console.log('-------------------------------------');
console.log('---------- If Else If ----------------');


const numSorteado1 = Math.floor(Math.random() * 100);
const numSorteado2 = Math.floor(Math.random() * 100);
console.log(`Números sorteados: ${numSorteado1} e
${numSorteado2}`);
if (numSorteado1 > numSorteado2) {
    console.log(`O número ${numSorteado1} é maior que o número
${numSorteado2}`);
}
else if (numSorteado2 > numSorteado1) {
    console.log(`O número ${numSorteado2} é maior que o número
${numSorteado1}`);
}
else {
    console.log(`${numSorteado1} é igual ao número
${numSorteado2}`);
}

console.log('---------------------------------------');
console.log('---------- If Ternário ----------------');

//instanciando o objeto Date 
const data = new Date();

//pegando o mês contido no objeto
const mes = data.getMonth() + 1;

//criando o if ternário
const semestre = (mes <= 6 ? 'primeiro semestre' : 'segundo semestre');

//exibindo no console
console.log(`Estamos no mês ${mes}`);
console.log(`Estamos no ${semestre} do ano de
${data.getFullYear()}`);