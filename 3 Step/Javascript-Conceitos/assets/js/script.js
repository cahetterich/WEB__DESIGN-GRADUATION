// comentários
/* comentários múltiplas linhas */

// Usando Console
console.log('Usando o Node e o Console!');
console.log('-------- básicos -------------');
  
//CONCEITOS BÁSICOS - CONSOLE
  
//declarando as variáveis
let userId = 4567;
let userName = 'usuarioJavascript';
let userLogged = true;
let userEmail;

//exibindo no console
console.log(userId);
console.log(userName);
console.log(userLogged);
console.log(userEmail);

console.log('-------- const -------------');
//declarando as constantes
const DATA_NASCIMENTO = '01/01/1995';
const CPF = '252.433.368-04';
const RG_SP = '29.365.924-6';

//exibindo no console
console.log(DATA_NASCIMENTO);
console.log(CPF);
console.log(RG_SP);

console.log('----- variáveis e tipos -------');
// VARIÁVEIS JS - Tipos de Dados 

//declarando as variáveis
let userName1 = 'Clark Kent';
let email = 'clark@email.com.br';
let idade = 35;
let userId1 = 12345;
let logado = true;

//exibindo no console
console.log(userName1, typeof userName1);
console.log(email, typeof email);
console.log(userId1, typeof userId1);
console.log(idade, typeof idade);
console.log(logado, typeof logado);

//para alterando os valores let não declare let na frente da variável
console.log('----- redeclarando let ------');
userName1 = 56789;
userId1 = 'false';

//exibindo no console
console.log(userName1, typeof userName1);
console.log(userId1, typeof userId1);

console.log('--------- var ---------');
//declarando e atribuindo valores às variáveis
var novoNome = 'Clark Kent';
var userAge = 35;

//exibindo as variáveis
console.log(novoNome, typeof novoNome);
console.log(userAge, typeof userAge);

//declarando a variável
var novoNome = 'Logan';
var userAge = 35;

//redeclarando a variável --- ERRO
console.log(novoNome, typeof novoNome);
console.log(userAge, typeof userAge);

console.log('--- mudando tipo do dado ----');

let valorInicial = true;
console.log(valorInicial, typeof(valorInicial));

//convertendo para string
valorInicial = String(valorInicial);
console.log(valorInicial, typeof(valorInicial));
//convertendo novamente para boolean
valorInicial = Boolean(valorInicial);
console.log(valorInicial, typeof(valorInicial));

//convertendo números
let numero = '12345';
console.log(numero, typeof(numero));
numero = Number(numero);
console.log(numero, typeof(numero));

// Template String
console.log('---- `Template String` ------');

let userName2 = 'Superman';
let poder = 'Voar';
let estaVoando = false;

//Exibindo no console com template string
console.log(`Nome do usuário: ${userName2}`);
console.log(`Id do usuário: ${poder}`);    

console.log(`Nome: ${userName2}, ele tem como poder ${poder}. Ele está voando? ${estaVoando}`);   
//ou
let mensagem = `Nome: ${userName2}, ele tem como poder ${poder}.
Ele está voando? ${estaVoando}`;
console.log(mensagem);

// Caixas de Diálogo
console.log('---- Caixas de Diálogo ------');

//alert
// alert('Olá Usuário, seja bem-vindo!')

//prompt
// let mensagemAlerta = prompt('Entre com uma mensagem no prompt');
// //exibir mensagem - dado vem como string
// console.log(`Mensagem digitada: ${mensagemAlerta}`); 

//confirm
// let resposta = confirm('Deseja finalizar o aplicativo?');
// console.log(resposta); //true or false

