let number = 0;

number++;
number++;
number++;
number++;

console.log(number); // somou até o número 4

//FOR
let number1 = 0;

for (let i = 0; i < 100; i++) {
    number1++;
}
console.log(`Resultado do FOR: ${number1}.`); // somou até o número 100 em loop for

//WHILE
let number2 = 0;

while (number2 < 1000) {
    number2++;
}
console.log(`Resultado do WHILE: ${number2}.`); // somou até o número 1000 em loop while

//WHILE 2 - sem saida e que dá erro
// while (number2 >= 0) {
//     number2++;
//     console.log(number2);
// }
// console.log(`Resultado do WHILE: ${number2}.`); 

// For + Lista
const listOne = [1, 2, 3, 4, 5];

for (let i = 0; i < listOne.length; i++) {
    console.log(`O valor do indice ${i} é: ${listOne[i]}.`);
}

// FOR OF - especifico para listas
for (let value of listOne) {
    console.log(`For Of: O valor do indice é: ${value}.`);
}

//FOR IN - para objetos
const myObject = {a : 1, b : 2, c : 3, d : 4}

for (let key in myObject) { // pega a chave do objeto (a, b, c, d)
    console.log(`For In: O valor da chave ${key} é: ${myObject[key]}.`);
}