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

// 7 de 13

console.log(' ');
console.log('------- criando métodos ---------');
console.log(' ');