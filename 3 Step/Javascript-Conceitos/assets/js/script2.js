console.log('------------------------');
// Operadores
console.log('---- Operadores ------');


//criando variáveis
const firstValue = 50;
const secondValue = 10;''
let result = 0; 

console.log(`Primeiro Número = ${firstValue}`);
console.log(`Segundo Número = ${secondValue}`);

// soma
result = (firstValue + secondValue);
console.log(`${firstValue} + ${secondValue} = ${result}`);

//subtração
result = (firstValue - secondValue);
console.log(`${firstValue} - ${secondValue} = ${result}`);

// multiplicação
result = (firstValue * secondValue);
console.log(`${firstValue} * ${secondValue} = ${result}`);

// divisão
result = (firstValue / secondValue);
console.log(`${firstValue} / ${secondValue} = ${result}`);

// módulo
result = (firstValue % secondValue);
console.log(`${firstValue} % ${secondValue} = ${result}`);

// potência
result = (firstValue ** secondValue);
console.log(`${firstValue} ** ${secondValue} = ${result}`);
console.log('---------------------------------');
// Operadores relacionais
console.log('---- Operadores Relacionais------');

//criando variáveis
let firstValue2 = 20;
let secondValue2 = 10;
let result2;

console.log(`Primeiro Número = ${firstValue2}`);
console.log(`Segundo Número = ${secondValue2}`);

// maior que
result2 = (firstValue2 > secondValue2);
console.log(`${firstValue2} > ${secondValue2} = ${result2}`);

//menor que
result2 = (firstValue2 < secondValue2);
console.log(`${firstValue2} < ${secondValue2} = ${result2}`);

// maior ou igual a
result2 = (firstValue2 >= secondValue2);
console.log(`${firstValue2} >= ${secondValue2} = ${result2}`);

// menor ou igual a
result2 = (firstValue2 <= secondValue2);
console.log(`${firstValue2} <= ${secondValue2} = ${result2}`);

// igual a / igualdade simples ==
result2 = (firstValue2 == secondValue2);
console.log(`${firstValue2} == ${secondValue2} = ${result2}`);

// diferente de
result2 = (firstValue2 != secondValue2);
console.log(`${firstValue2} != ${secondValue2} = ${result2}`);

// convertendo o segundo valor em uma string
secondValue2 = '50';

// estritamente igual a (mesmo valor e tipo de dado)
result2 = (firstValue2 === secondValue2);
console.log(`${firstValue2} === ${secondValue2} = ${result2}`);

// estritamente diferente de
result2 = (firstValue2 !== secondValue2);
console.log(`${firstValue2} !== ${secondValue2} = ${result2}`);
console.log('-------------------------------');
// Operadores lógicos
console.log('---- Operadores Lógicos ------');

//criando variáveis
let firstValue3 = 50;
let secondValue3 = 10;
let result3;

// Operador OU
result3 = (firstValue3 === secondValue3) || (firstValue3 >= secondValue3);
console.log(`O resultado da expressão é: ${result3}`);

// Operador E 
result3 = (firstValue3 === secondValue3) && (firstValue3 >= secondValue3);
console.log(`O resultado da expressão é: ${result3}`);

// Operador Não
result3 = !((firstValue3 === secondValue3) && (firstValue3 >= secondValue3));
console.log(`O resultado da expressão é: ${result3}`);
console.log('----------------------------------------');
// Operadores lógicos
console.log('--- Operadores Indremento/Decremento ---');

//criando variáveis
let value1 = 50;
let value2 = 30;
let total = 0;

console.log(`Valor 1 = ${value1}`);
console.log(`Valor 2 = ${value2}`);
console.log('--------------------------');

//aplicando os operadores
value1++;
value2--;
console.log(`Novo Valor 1 ++ = ${value1}`);
console.log(`Novo Valor 2 -- = ${value2}`);
console.log('--------------------------------');

//operação pré-fixada
console.log(' ----- Operação ++pre-fixada -----');
value1 = 50;
total = ++value1 + 50; //51
total2 = --value1 + 50; //50
console.log(`Novo Valor 1 = ${value1}`);
console.log(`Valor ${value1} ++ 50 = ${total}`);
console.log(`Novo ${value1} -- 50 = ${total2}`);

console.log('------- outro exemplo --------');
value1 = 30;
value2 = 20;
console.log(`Valor 1 = ${value1}`);
console.log(`Valor 2 = ${value2}`);

let resultado = ++value1 + ++value2;
console.log(`${value1} + ${value2} = ${resultado}`); // resultado 52

console.log('--------------------------');


//operação pós-fixada
console.log(`---- Operação pos-fixada++ ----`);

value1 = 50;
total = value1++ + 50;
console.log(`Valor total = ${total}`);
console.log(`Novo Valor 1 = ${value1}`);

console.log('------- outro exemplo --------');
value1 = 30;
value2 = 20;
console.log(`Valor 1 = ${value1}`);
console.log(`Valor 2 = ${value2}`);

let resultado2 = value1++ + value2++; // dois decrementos, altera os números após a soma
console.log(`${value1} + ${value2} = ${resultado2}`);

console.log('--------------------------');
//operadores de atribuição
console.log(`---- Operadores de Atribuição ----`);

//criando variáveis
let value = 50;
console.log(`Valor = ${value}`);

//aplicando operadores
value += 10;
console.log(`Novo valor += ${value}`);

value -= 10;
console.log(`Novo valor -= ${value}`);

value *= 10;
console.log(`Novo valor *= ${value}`);

value /= 10;
console.log(`Novo valor /= ${value}`);

value **= 10;
console.log(`Novo valor **= ${value}`);

value %= 10;
console.log(`Novo valor %= ${value}`);

console.log('--------------------------');
