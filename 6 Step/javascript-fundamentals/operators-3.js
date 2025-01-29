const userName = 'Carla';
const userAge = 32;

console.log(userName != '' && userAge > 0); // user name for diferente de vazio, e  userage foir  maior que 0, dar uma resposta. = true

const userName1 = '';
const userAge1 = 32;

console.log(userName1 != '' && userAge1 > 0); // user name for diferente de vazio, && = E,  userage foir  maior que 0, dar uma resposta. = false (pois todas as sentenças tem que retornar true)

console.log(userName1 != '' || userAge1 > 0); // user name for diferente de vazio, || = OU,  userage foir  maior que 0, dar uma resposta. = true (pois uma das sentenças é verdadeira)

const hasNameAndAge = userName1 != '' && userAge1 > 0;

console.log(!hasNameAndAge); // o que é falso retorna verdadeiro com o operador de negação "!"