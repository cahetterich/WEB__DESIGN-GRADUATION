// Operadores de comparação

/*
    ==
    !=
    >
    <
    >=
    <=
    ===
    !==

*/

const a = 1;
const b = 1;

console.log (a == b); //retorna true, pois 1 é igual  a 1
console.log(a != b); //retorna false, pois não são diferentes

const c = 2;
const d = 3;

console.log (c > d); // retorna false, pois 2 não é maior que 3
console.log (c < d); // retorna true, pois 2 é menor que 3
console.log (c >= d); // retorna false, pois 2 não é maior que 3
console.log (c <= d); // retorna true, pois 2 é menor que 3

const e = 0;
const f = 0;

console.log(e === f); // retorna true, pois é exatamente igual

const g = 0;
const h = false;
const i = false;

console.log(g === h); // retorna falso, pois compara o valor e tipo de cada const
console.log( `Apenas comparação de valores ${g == h}.`); // retorna true - compara apenas o valor (false = 0)
console.log( `Comparação de valor e tipo ${g === h}.`); // retorna false - compara valor e tipo (number é diferente de boolean)
console.log( `Comparação de valor e tipo ${i === h}.`); // retorna true, pois são dois booleans
console.log( `Comparação de valor e tipo ${i !== h}.`); // retorna false, pois são dois booleans de mesmo valor

console.log();