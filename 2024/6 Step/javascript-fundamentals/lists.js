const emptyArray = [];
const unidimensionalArray = [1, 2, 3];
const multidimensionalArray = [1, 2, 3, [4, 5]];

//FOREACH
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => { // number, index
	console.log(`O número atual da iteração é: ${number}, e o índice é ${index}`);
});

//MAP
const numbers2 = [1, 2, 3];
const sumNumbers2 = numbers2.map((number) => {
	return number + 1;
});
console.log(`A lista original: [${numbers2}]`);
console.log(
	`A lista modificada com seus valores somados com 1: [${sumNumbers2}]`
);

const evenNumbers = numbers.map((number) => (number % 2 == 0 ? number : -1));
console.log(evenNumbers);  //retorna apenas os números pares, e modifica o restante por -1

const sumNumbers3 = numbers.map((number) => number +1);
console.log(sumNumbers3);  //retorna a lista com os valores somados com 1


//FILTER
const names = [
	'Steve Rogers',
	'Tony Stark',
	'Bruce Banner',
	'Bucky Barnes',
	'Natasha Romanoff',
];
const filteredNames = names.filter((name) => {
	return name.charAt(0) === 'B';
});
console.log(`A lista original: [${names}]`);
console.log(`A lista com os nomes filtrados: [${filteredNames}]`); // retorna uma nova lista com os nomes com B

const evenNumbers2 = numbers.filter((number) => number % 2 == 0);
console.log(evenNumbers2); // retorna apenas os números pares


//FIND
const filteredName = names.find((name) => {
	return name.charAt(0) === 'B';
});
console.log(`A lista original: [${names}]`);
console.log(`O primeiro nome filtrado foi: ${filteredName}`);


const words = ['casa', 'aviao', 'amarelo', 'mansao'];
const findByLetter = words.find((word) => word.indexOf('s') !== -1);
console.log(findByLetter); //retorna o primeiro elemento que contenha a letra 's', e retorna apenas um item e não uma lista


//REDUCE
const sumOfAllNumbers = numbers.reduce((accumulator, number) => {
	return accumulator + number;
});
console.log(`A lista original: [${numbers}]`);
console.log(`A soma de todos os números da lista original: ${sumOfAllNumbers}`);

const newNumbers = [1, 2, 2];
const sumOfAllNumbers2 = newNumbers.reduce((accumulator, currentValor) =>  accumulator + currentValor, 0);
console.log(`A segunda lista original: [${newNumbers}]`);
console.log(`A soma dos valores é: ${sumOfAllNumbers2}`);
