console.log('---------------------------------------');
// Function Expression
console.log('------- Arrays 2 ---------');
console.log(' ');
console.log('-------- filter / map / reduce ---------');
console.log(' ');
const vingadores = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
console.log(vingadores);
//filter()
const novoArray = vingadores.filter(vingador => {
    return vingador.length > 9;
});
console.log('Novo array apenas com nomes de heróis com mais de 9 caracteres');
console.log(novoArray);
//map()
const quantidadeCaracteresNomes = vingadores.map(vingador => {
     return vingador.length;
});

console.log('Novo array contendo a quantidade de caracteres de cada nome');
console.log(quantidadeCaracteresNomes);

//reduce()
const totalCaracteres = vingadores.reduce((acc,vingador) => {
    return acc + vingador.length;
},0); // O 0 é o valor inicial da variável acc

console.log(`Total de caracteres dos nomes dos heróis: 
${totalCaracteres}`);

console.log('---------------------------------------');

const produtos = ['Notebook', 'Smartphone', 'Smartwatch', 'Tablet', 'Playstation 5'];
const precos = ['6800', '6700', '3500', '6300', '5400'];

console.log(produtos);
console.log(precos);

// filter() - buscando produtos
const produtosComSmart = produtos.filter((produto) =>{
    return produto.includes('Smart');
});
console.log(produtosComSmart);


// filter() - buscando preços maiores
const precosMaiores = precos.filter((preco) => {
    return preco > 5500;
});
console.log(precosMaiores);

// map() - Aplica uma função a cada elemento de um array, e retorna um novo array com todas as letras maíusculas
const produtosEmMaiuscula = produtos.map((produto) => {
    return produto.toUpperCase();
});
console.log(produtosEmMaiuscula);

// map() - dar um desconto para todos os produtos 10%
const precosDesconto = precos.map ((preco) => {
    return preco - preco * 0.10;
});
console.log(precosDesconto);

// reduce() - retorna um único valor
const totalLetrasProdutos =  produtos.reduce((acumulador, produto) => {
    return acumulador + produto.length;
}, 0); // o 0 é o acumulador - para iniciar a contagem como 0, assim ele acumula a contagem das letras
console.log(totalLetrasProdutos);

// reduce() - valor do estoque
const totalValores = precos.reduce((acumulador, preco) => {
    return acumulador + preco;
}, 0);
console.log(totalValores);

console.log(' ');
console.log('--------- interação em Arrays ---------');
console.log(' ');

console.log('------- for ---------');
console.log(' ');

const vingadores2 = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
for(let i = 0; i < vingadores2.length; i++){
    console.log((`Índice ${i} do array Vingadores: ${vingadores2[i]}`));
}

console.log(' ');
console.log('------- for in ---------');
console.log(' ');

const vingadores3 = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
for (const vingador in vingadores3){
    console.log((`Índice ${vingador} do array Vingadores: ${vingadores3[vingador]}`));
}

console.log(' ');
console.log('------- for of ---------');
console.log(' ');

const vingadores4 = ['Homem de Ferro', 'Capitão América','Thor', 'Valquíria', 'Capitã Marvel'];
for (const vingador of vingadores4){
    console.log(`Herói: ${vingador}`);
}


console.log(' ');
console.log('------- foreach ---------');
console.log(' ');

const vingadores5 = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
vingadores5.forEach( vingador => {
    const agilidade = Math.ceil(Math.random()*100);
    console.log(`Nome do herói: ${vingador} - Agilidade: ${agilidade}`);
})

console.log(' ');
console.log('------- outros exemplos ---------');
console.log(' ');


const produtos1 = ['Smatphone', 'Notebook', 'Smartwatch', 'Tablet', 'Teclado', 'Caixa de som', 'Fone de ouvido', 'Webcan', 'Roteador'];
console.table(produtos1);

console.log('------- for clássico ---------');
// usando for classico 
for (let i = 0; i < produtos1.length; i++) {

    console.log(`Índice ${i} do Array = ${produtos1[i]}`); // exibe todos os produtos e seus respectivos iídices
}

console.log('------- for in ---------');
// for in - trabalha com indice e conteúdo automáticamente
for (let index in produtos1) {
    console.log(`Índice ${index} - Produto: ${produtos1[index]}`);
}

console.log('------- for of ---------');
// usando for of - não percorre índices, percore diretamente os elementos
for (let produto1 of produtos1) {
    console.log(`Nome do produto: ${produto1.toUpperCase()}`);
    }

console.log('------- forEach ---------');
//usando forEach - percorre todo array, e para cada elemento encontrado executa uma função previamente definida
let produtoMaiorQuantidade = 0;
let maiorQuantidade = 0;

produtos1.forEach(function (produto) { // ou // produtos1.forEach((produto) => {
    console.log(`${produto} - ${produto.length}`); // nome do produto - quantidade de caracteres
    if (produto.length > maiorQuantidade) {
        maiorQuantidade = produto.length;
        produtoMaiorQuantidade = produto;
    }
});

console.log(`Maior quantidade de caracteres: ${produtoMaiorQuantidade} - Total: ${maiorQuantidade} caracteres`);



console.log(' ');
console.log('------- outros exemplos ---------');
console.log(' ');