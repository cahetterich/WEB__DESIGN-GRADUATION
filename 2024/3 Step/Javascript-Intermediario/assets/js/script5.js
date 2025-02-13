console.log('---------------------------------------');
// Function Expression
console.log('------- Objetos Literais---------');
console.log(' ');

const usuario = {
    nome: 'Clark Kent',
    id: 12345,
    idade: 38,
    profissao: 'Repórter',
    email: 'clark@planetadiario.com'
}
console.log(usuario);

const usuario0 = {
    nome: 'Clark Kent',
    id: 12345,
    idade: 38,
    profissao: 'Repórter',
    email: 'clark@planetadiario.com'
}
console.log(`Nome: ${usuario0.nome}`);
console.log(`Id: ${usuario0.id}`);
console.log(`Email: ${usuario0.email}`);


console.log(' ');
console.log('------- método construtor ---------');
console.log(' ');

//criando um objeto
function Usuario(nome, id, idade, profissao, email) {
    this.nome = nome;
    this.id = id;
    this.idade = idade;
    this.profissao = profissao;
    this.email = email;
}
const usuario1 = new Usuario('Bruce Wayne', 78945, 40, 
'Empresário', 'bruce@gotham.com');
const usuario2 = new Usuario('Diana Prince', 36985, 35, 
'Enfermeira', 'diana@temiscira.com');
const usuario3 = new Usuario('Peter Parker', 741233, 22, 
'Fotógrafo', 'parker@photo.com');
//exibindo os objetos
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

console.log(' ');
console.log('------- factory function ---------');
console.log(' ');

function criarHeroi(nome, velocidade, agilidade, forca) {
    return {
        nome,
        velocidade,
        agilidade,
        forca
    };
}
//criando os objetos
const heroi1 = criarHeroi("Eu", 88, 87, 91);
const heroi2 = criarHeroi("Tu", 86, 82, 92);
const heroi3 = criarHeroi("Ele", 92, 98, 94);
//exibindo os objetos
console.log(heroi1);
console.log(heroi2);
console.log(heroi3);

console.log(' ');
console.log('------- criando métodos ---------');
console.log(' ');


function criarHeroi(nome, velocidade, agilidade, forca) {
    return {
        nome,
        velocidade,
        agilidade,
        forca,        
        falar: function () {
            console.log(`Olá eu sou o ${nome} – 
            velocidade: ${velocidade} - agilidade: 
            ${agilidade} - força: ${forca}`);
        }
    };
}
const heroi01 = criarHeroi("Superman", 98, 92, 99);
const heroi02 = criarHeroi("Batman", 86, 82, 88);
const heroi03 = criarHeroi("Hulk", 92, 98, 94);
// exibindo os objetos
heroi01.falar();
heroi02.falar();
heroi03.falar();


console.log(' ');
console.log('---- adiconar ou remover propriedades ----');
console.log(' ');

function criarHeroi1(nome, velocidade, agilidade, forca) {
    return {
        nome,
        velocidade,
        agilidade,
        forca 
    }
}
const heroi10 = criarHeroi1("Superman", 98, 92, 99);
const heroi20 = criarHeroi1("Batman", 86, 82, 88);
//adicionando uma propriedade ao heroi1
console.log('Adicionando a propriedade ponto fraco ao heroi 1');
heroi10.pontoFraco = 'Kryptonita';
console.log(heroi10);
//removendo uma propriedadedo heroi2
console.log('Removendo a propriedade nome do heroi 2');
delete heroi20.nome;
console.log(heroi20);


console.log(' ');
console.log('------- mais exemplos ---------');
console.log(' ');

//Objetos literais
const produto1 = {
    id: 123,
    tipo: 'Celular',
    fabricante: 'Apple', 
    preco: 4899.00
}

const produto2 = {
    id: 456,
    tipo: 'Notebook',   
    fabricante: 'Asus',
    preco: 6899.00
}

console.log(produto1);
console.log(produto2);
console.log(produto1.tipo);
console.log(produto2.preco);

console.log('----------------------------');

//Criando objetos com construtor

function User(id, user, password, email) {
    this.id = id;
    this.user = user; 
    this.password = password;
    this.email = email;
}

const user1 = new User(123, 'Eu mesmo', 'abc', 'eumesmo@eu.com');
const user2 = new User(456, 'Você mesmo', 'drf', 'vocemesmo@voce.com');
const user3 = new User(789, 'Ele mesmo', 'ghi', 'elesmesmo@ele.com');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user3.id);

console.log('----------------------------');

//Factory function - retorna um objeto

function criarHeroi2(nome, velocidade, agilidade, forca) {
    return {
    nome,
    velocidade,
    agilidade,
    forca
    };
}

const heroiUm = criarHeroi2('Eu', 88, 87, 91);
const heroiDois = criarHeroi2('Tu', 86, 82, 92);
const heroiTres = criarHeroi2('Ele', 92, 87, 94);

console.log(heroiUm);
console.log(heroiDois);
console.log(heroiTres);
console.log(heroiTres.nome);

console.log('----------------------------');

// criando métodos

function Pessoa(nome, idade, altura, cidade, ocupacao) {
    return {
        nome, 
        idade,
        altura,
        cidade,
        ocupacao,
        exibirPessoa: function () {
            console.log(`Nome: ${nome}`);
            console.log(`Idade: ${idade}`);
            console.log(`ltura: ${altura}`);
            console.log(`Cidade: ${cidade}`);
            console.log(`Ocupação: ${ocupacao}`);
        }
    }
}

const pessoa1 = new Pessoa('Paulo', 50, 1.93, 'São Paulo', 'Desenvolvedor');
pessoa1.exibirPessoa(); // mostra o objeto com as variáveis atribuidos

console.log('----------------------------');

const pessoa2 = new Pessoa('Sandra', 30, 1.70, 'São Paulo', 'Desenvolvedora');
pessoa2.exibirPessoa(); // mostra o objeto com as variáveis atribuidos


console.log('----------------------------');

// adicionando uma propriedade ao pessoa1
console.log('Adicionando a propriedade projeto Atual');
pessoa1.projetoAtual = 'Projeto Front-End Tesla';
console.log(pessoa1);

// removendo uma propriedade da pessoa2
console.log('Removendo a altura da pessoa 2');
delete pessoa2.altura;
console.log(pessoa2);


console.log(' ');
console.log('------- Spred Operator ---------');
console.log(' ');

// Spred Operator - cria um novo array/objetos com os dados de outros arrays - serve para manipular objetos/arrays

//primeiro array
const xMen = new Array('Ciclope', 'Wolverine', 'Fênix', 'Fera', 'Vampira');
//segundo array
const vingadores = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
//gerando um novo array com o spread
const novoArray1 = [...xMen, ...vingadores];
//exibindo o novo array
console.log(novoArray1);


//array original
const vingadores1 = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
//copiando o array original para outro
const novoArray2 =[...vingadores1];
//exibindo o novo array
console.log(novoArray2);


//criando o objeto original
const vingador = { 
    nome: 'Clint Barton', 
    email: 'clint@arqueiro.com' 
};
//exibindo o objeto original
console.log(vingador);
//criando um novo objeto com novas propriedades
const upgradeVingador = {...vingador, forca: 82, pontaria: 100};
//exibindo o novo objeto
console.log(upgradeVingador);


console.log(' ');
console.log('------- mais exemplos ---------');
console.log(' ');


const numeros1 = [1, 2, 3];
console.log(`Array 1o números: ${numeros1}`);

const numeros2 = [4, 5, 6];
console.log(`Array 2o números: ${numeros2}`);

const todosNumeros = [...numeros1, ...numeros2];
console.log(`Array todos os números: ${todosNumeros}`);

const novoArray = [12, 14, 16, 18, ...todosNumeros, 20, 22, 24];
console.log(novoArray);

console.log('---------------------------');

// com objetos
const carrinho = {
    'Camiseta': 99.99,
    'Calça': 159.99,
    'Tênis': 289.98
};

// copia os itens do carrinho para um novo carrinho

const carrinhoCopiado = {...carrinho};
console.log(carrinho);
console.log(carrinhoCopiado); // passamos os dados do objeto para um novo objeto


console.log(' ');
console.log('------- Rest Operator ---------');
console.log(' ');

// permite que a função receba um número indefinido de argumentos

//criando a função passando o operador como parâmetro
function somarNumeros(...numeros) {
    let total = 0;     
    numeros.forEach(numero => {
        total+=numero;
    })
    return total;
}
console.log(`Somando os valores: ${somarNumeros(1, 2, 3, 4, 5, 
6, 7, 8, 9)}`);
console.log(`Somando os valores: ${somarNumeros(1, 2, 3, 4, 5, 
6, 7, 8)}`);
console.log(`Somando os valores: ${somarNumeros(1, 2, 3, 4, 5, 
6, 7)}`);
console.log(`Somando os valores: ${somarNumeros(1, 2, 3, 4, 5, 
6)}`);


console.log(' ');
console.log('------- mais exemplos ---------');
console.log(' ');

// rest operator - operador que permite uma quantidade ilimitada em uma função

function calcularSoma(...numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
}

console.log(calcularSoma(10, 20, 30));
console.log(calcularSoma(244, 365, 166, 897));

console.log('---------------------------');

function calcularMedia (...arr) {
    let soma = 0;
    for (let numero of arr) {
        soma += numero;
    }
    return soma / arr.length; // soma / pelo quantidade de itens do array 
}

const numeros = [100, 200, 300, 400, 50, 60, 70, 80, 90, 1000];
const media = calcularMedia(...numeros);

console.log(`A média dos números do Array é: ${media}`);

console.log(' ');
console.log('------- Desestruturação ---------');
console.log(' ');

// permite acessar os valores existentes em objetos e arrays

//em arrays

const vingadores3 = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log(vingadores3);

//fazendo a desestruturação com três variáveis e um array
const [vingador1, vingador2, vingador3, 
...outrosVingadores3] = vingadores3;
// Exibindo as variáveis criadas
console.log(`Vingador 1: ${vingador1}`);
console.log(`Vingador 2: ${vingador2}`);
console.log(`Vingador 3: ${vingador3}`);
// Exibindo o novo array
console.log(`Demais vingadores: ${outrosVingadores3}`);

console.log('---------------------------');
// em objetos 
const usuario4 = {
    nome: 'Clark Kent',
    id: 12345,
    idade: 38,
    profissao: 'Repórter',
    email: 'clark@planetadiario.com'
}
// Exibindo o objeto original
console.log(usuario4);
//fazendo a desestruturação com três variáveis e um objeto
const {nome, id, profissao, ...demaisDados} = usuario4;
console.log('Exibindo as variáveis');
console.log(`Id: ${id}`);
console.log(`Nome: ${nome}`);
console.log(`Profissão: ${profissao}`);
// Exibindo o novo objeto
console.log(demaisDados);

console.log(' ');
console.log('------- mais exemplos ---------');
console.log(' ');

//  Desestruturação -  dividindo um array

// em array

const numeros01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...restanteNumeros] = numeros01; // a = 1, b = 2, c = 3
console.log(a);  //1
console.log(b);  //2
console.log(c);  //3
console.log(restanteNumeros);  // todos os outros

console.log('---------------------------');
// em objetos

const livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1937,
    editora: 'George Allen & Unwin',
    paginas: 310,
};

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.editora);

const { titulo, autor, anoPublicacao, editora, paginas } = livro;
console.log(`Nome do Livro: ${titulo}`);
console.log(`Nome do Autor: ${autor}`);
console.log(`Ano de publicação: ${anoPublicacao}`);
console.log(`Editora: ${editora}`);
console.log(`Páginas: ${paginas}`);

console.log('------------------------');

