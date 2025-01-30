
const item1 =10;
const item2 =10;
const item3 =20;
const item4 = 30;
const item5 = 50;

// SOMA

console.log(`Checkout: ${item1 + item2 + item3}`);
console.log(`Header do site com o total do valor: ${item1 + item2 + item3}`);

// função retorna a soma de todos os 4 itens e não apenas dos 3 primeiros como anteriormente
function sumValues(interest)  {  //interest = juros  
    const totalValue = item1 + item2 + item3 + item4 + item5; // acrescentamos os itens aqui

    return totalValue + totalValue * interest;
}
console.log(`Checkout: ${sumValues(0.1)}`); // colocamos parenteses para executar uma função 0.1 é o interest de 10% de juros
console.log(`Header do site com o total do valor: ${sumValues(0.1)}`);


// MULTIPLICAÇÂO
function multipyValues(value1, value2) {
   return value1 * value2;
}
console.log(multipyValues(2, 3));


function doSomething() {
	console.log('Eu sou uma função!');
}
doSomething();

function sum(value1, value2) {
	const sumValues = value1 + value2;
	return sumValues;
}
sum(5, 5);

function sum(value1, value2) {
	const sumValues = value1 + value2;
	return sumValues;
}
const finalValue = sum(5, 5);
console.log(`O valor final da soma é:`, finalValue);