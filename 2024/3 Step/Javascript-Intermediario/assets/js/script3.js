console.log('---------------------------------------');
// Function Expression
console.log('------- Arrays ---------');
console.log(' ');

//usando o método construtor
const xMen = new Array('Ciclope', 'Wolverine', 'Fênix', 
'Fera', 'Vampira');
//usando a declaração literal
const vingadores = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
//exibindo os array
console.log(xMen);
console.log(vingadores);

console.log('---------------------------------------');

const vingadores2 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
//exibindo o array
console.log(vingadores2);
//exibindo conteúdo de índices no array
console.log(vingadores2[1]);
console.log(vingadores2[2]);
//alterando o valor de um índice
vingadores2[1] = 'Homem Aranha';
console.log(vingadores2);
console.log(vingadores2[1]);

console.log('---------------------------------------');

//método construtor
const arr = new Array('Televisão', 'Video Game', 'Celular', 'Notebook', 1234, true, 212, false);

console.log(arr);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr[5]); // não existe esse item no array

console.log('---------------------------------------');

const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];

console.log(pessoas);
console.table(pessoas); // aparece como tabela
console.log(pessoas.length); // retorna o número de elementos do array
console.log(`Quantidade de pessoas: ${pessoas.length}`);


console.log('---------------------------------------');
// Function Expression
console.log('------- manipulando Arrays ---------');
console.log(' ');

console.log('-------------- length ------------------');
console.log(' ');

const vingadores3 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
const xMen3 = new Array('Ciclope', 'Wolverine', 'Fênix', 
'Fera', 'Vampira');
console.log('Array Vingadores');
console.log(vingadores3);
console.log(`Total de heróis no array: 
${vingadores3.length}`);
console.log('Array Xmen');
console.log(xMen3);
console.log(`Total de heróis no array: ${xMen3.length}`);

console.log(' ');
console.log('---- unshift / push / shift / pop ----');
console.log(' ');


const vingadores4 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
//exibindo o array
console.log(vingadores4);
//inserindo no primeiro índice
vingadores4.unshift('Gavião Arqueiro');
//inserindo no último índice
vingadores4.push('Viúva Negra');
//exibindo o array com os novos heróis
console.log('Novos hérois inseridos');
console.log(vingadores4);
//excluindo o primeiro índice
vingadores4.shift();
//excluindo o último índice
vingadores4.pop();
//exibindo o array sem os novos heróis
console.log('Novos hérois excluídos');
console.log(vingadores4);

console.log(' ');
console.log('----------- splice / slice --------------');
console.log(' ');

const vingadores5 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
//exibindo o array
console.log(vingadores5);
//excluindo dois elementos do array a partir do índice 2
vingadores5.splice(2,2);
//exibindo o array com os heróis excluídos
console.log('Array com os hérois excluídos');
console.log(vingadores5);
//excluindo dois elementos do array a partir do índice 2
vingadores5.splice(2, 0, 'Thor', 'Valquíria');
//exibindo o array com os heróis novamente inseridos
console.log('Array com os hérois novamente inseridos');
console.log(vingadores5);
//copiando uma parte do array vingadores para o novoArray
const novoArray = vingadores5.slice(1,4);
console.log('Novo array com alguns heróis copiados');
console.log(novoArray);

console.log(' ');
console.log('--------- indexOf /lastIndexOf ---------');
console.log(' ');

const vingadores6 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
console.log(vingadores6);
//procurando pelo Capitão América - 
let indice = vingadores6.indexOf('Capitão América');
console.log(`O Capitão América está no índice ${indice} 
do array`);
//procurando pela Capitã Marvel
indice = vingadores6.lastIndexOf('Capitã Marvel');
console.log(`A Capitã Marvel está no índice ${indice} do array`);

console.log(' ');
console.log('----------- concat ------------------');
console.log(' ');

const vingadores7 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
const xMen7 = ['Ciclope', 'Wolverine', 'Fênix', 'Fera', 
'Vampira'];
console.log('Arrays originais');
console.log(vingadores7);
console.log(xMen7);
//gerando novo array
const todosHerois = vingadores7.concat(xMen7);
//exibindo o novo array
console.log('Novo array de heróis');
console.log(todosHerois);

console.log(' ');
console.log('----------- sort / reverse --------------');
console.log(' ');

const vingadores8 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
console.log(vingadores8);
//colocando em ordem alfabética
console.log('Exibindo em ordem alfabética');
vingadores8.sort();
console.log(vingadores8);
console.log('Invertendo a ordem alfabética');
//invertendo a ordem alfabética
vingadores8.reverse();
console.log(vingadores8);

console.log(' ');
console.log('----------- join --------------');
console.log(' ');

const vingadores9 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
console.log(vingadores9);
// convertendo em string - deixará um espaço vazio entre cada elemento do array
const string1 = vingadores9.join(' ');
console.log('Nova string com um espaço entre os elementos');
console.log(string1);
// convertendo em string e mudando o separador
const string2 = vingadores9.join(' - ');
console.log('Nova string com um espaço e um hífen separando os elementos');
console.log(string2);


console.log(' ');
console.log('--- includes / every / some / find ---');
console.log(' ');

const vingadores10 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
console.log(vingadores10);
// includes()
const heroiExiste = vingadores10.includes('Thor') 
console.log(`Thor está no array: ${heroiExiste}`); 
//every()
const todosHeroisTemLetraE = vingadores10.every(vingador => 
vingador.includes('e'));
console.log(`odos heróis tem a letra 'e' em seu nome: 
${todosHeroisTemLetraE}`); 
//some()
const umHeroitemLetraE = vingadores10.some(vingador => 
vingador.includes('e'));
console.log(`Pelo menos um herói tem a letra 'e' em seu 
nome: ${umHeroitemLetraE} `); 
//find()
const exibeHeroi = vingadores10.find(vingador => 
vingador.length > 10);
console.log(`Qual é o primeiro herói com o nome maior que 
10 caracteres: ${exibeHeroi}`);

console.log(' ');
// Function Expression
console.log('------- outro exemplo ---------');
console.log(' ');

const produtos = ['Notebook', 'Smartphone', 'Smartwatch', 'Tablet', 'Playstation 5'];

console.log(produtos);
console.table(produtos);


//utilizando unshift
//adicionando um novo produto no início do array usando unshift()
produtos.unshift('Monitor Ultrawide');
console.log(produtos);

//adicionando um novo produto no final do array usando push()
produtos.push('Teclado Mecânico Razer');
console.log(produtos);
console.table(produtos);


// cuidado ao utlizar, pois exclui 
// remove o primeiro produto do array usando shift()
let primeiroProduto = produtos.shift();
console.log('O primeiro produto removido foi: ' + primeiroProduto);
console.log(produtos);

// remove o primeiro produto do array usando pop()
let ultimoProduto = produtos.pop();
console.log('O último produto removido foi: ' + ultimoProduto);
console.log(produtos);

// adicionar um novo produto no meio do array usando splice()
produtos.splice(2, 0, 'Tablet Apple iPad Pro', 'Iphone 13'); // posição de inicio = 2, produto para excluir = 0
console.log('O array agora é: ' + produtos);

// remover três produtos do array usando splice()
produtos.splice(1, 3);// posição de inicio = 1, produto para excluir = 3
console.log('O array agora é: ' + produtos);

// criar uma cópia do array opriginal usando slice()
let copiaProdutos = produtos.slice(); // copia tudo
console.log('A cópia do Array é: ' + copiaProdutos);
console.table(copiaProdutos);

let copiaProdutos2 = produtos.slice(2); // copia apartir do indice 2
console.log('A cópia do Array é: ' + copiaProdutos2);
console.table(copiaProdutos2);

let copiaProdutos3 = produtos.slice(0,3); // copia apartir do indice 0 e para no 3 produto
console.log('A cópia do Array é: ' + copiaProdutos3);
console.table(copiaProdutos3);

//encotrar a posição do produto "Tablet" no array usando indexOf() - inicia pelo inicio
let posicao = produtos.indexOf('Tablet');
console.log('A posição do produto Tablet é: ' + posicao);
// vale lembrar que no indexOf - , se o array tiver mais elementos com mesno nome, ele só puxará a posição do primeiro - ignorando os restantes
//encotrar a posição do produto "Tablet" no array usando indexOf() - inicia pelo final
posicao = produtos.lastIndexOf('Tablet');
console.log('A posição do produto Tablet é: ' + posicao);



