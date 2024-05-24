console.log('---------------------------------------');
// Function Expression
console.log('------- Function Expression ---------');
console.log(' ');

const nomeVariavel = function() {
   
    //corpo da função
 }

 console.log('Função de cálculo de média');
//criando a função
const media = function(n1, n2, n3, n4){
    const media = (n1 + n2 + n3 + n4)/4;
    return media.toFixed(1);
}
//chamando a função
console.log(`Média do aluno 1 = ${media(8,9,7,9)}`);
console.log(`Média do aluno 2 = ${media(10,8,9,10)}`);
console.log(`Média do aluno 3 = ${media(8,8,8,10)}`);


console.log('---------------------------------------');

const simulaValorPassagem = function (qtdAdultos, qtdCriancas, idaVolta) {
    const PRECO_PASSAGEM = 1000; // const que definimos o valor, declaramos em caixa alta

    // calculo adulto
    const valorAdulto = PRECO_PASSAGEM * qtdAdultos;

    // calculo Crianca
    const valorCrianca = PRECO_PASSAGEM * qtdCriancas * 0.5;

    if (idaVolta) {
        return (valorAdulto + valorCrianca) * 2;
    }
    else {
        return (valorAdulto + valorCrianca);
    }
}

let valorPassagem = simulaValorPassagem(2, 3, false);
console.log(`O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`);
valorPassagem = simulaValorPassagem(3, 0, true);
console.log(`O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`);


console.log('---------------------------------------');
// Function Expression
console.log('------- Arrow Function  ---------');
console.log(' ');

//declarando a variável e criando a função 
const gerarSenha = () =>{ const caracteres =
    'ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrsuvwxyz1234567890!@#$%&amp;*';
    let novaSenha = '';
    for (let i = 0; i <= 19; i++) {
         const indice = Math.round(Math.random() *
         caracteres.length);
         novaSenha += caracteres[indice];
        }
    return novaSenha;
   }
   //chamando a função atribuída à variável
   console.log(`A senha gerada foi: ${gerarSenha()}`);
   console.log(`A senha gerada foi: ${gerarSenha()}`);
   console.log(`A senha gerada foi: ${gerarSenha()}`);
  
console.log('---------------------------------------');

const calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
    return diarias * valorDiaria + taxaLimpeza;
}

let valorHospedagem = calcularValorHospedagem (9, 500, 300); 
    console.log(`O valor total da Hospedagem é R$: ${valorHospedagem.toFixed(2)}.`);

valorHospedagem = calcularValorHospedagem (5, 300, 150); 
    console.log(`O valor total da Hospedagem é R$: ${valorHospedagem.toFixed(2)}.`);


console.log('---------------------------------------');

const validarLogin = (usuario, senha) => {
    const usuarioRegistrado = 'user';
    const senhaRegistrada = 'senha';

    if (usuario === usuarioRegistrado && senha === senhaRegistrada) {
        console.log("Login efetuado com sucesso!");
        return true;
    } else {
        console.log("Usuário ou senha inválidos! Tente novamente.");
        return false;
    }
};

// Exemplo de uso
const user1 = validarLogin("user", "senha"); // sucesso de login
const user2 = validarLogin("erro", "erro"); // dados inválidos de login
console.log(user1, user2);


console.log('---------------------------------------');
// Function Expression
console.log('--------- Callback Function -----------');
console.log(' ');

function mensagem1() {
    console.log(`Exibindo a mensagem 1`)
  }
  function mensagem2() {
    console.log(`Exibindo a mensagem 2`)
  }
  function mensagem3() {
    console.log(`Exibindo a mensagem 3`)
  }
  // console.log('');
  console.log('-----Fluxo normal-----');
  mensagem1();
  mensagem2();
  mensagem3();

  console.log("-----Usando o callback-----");

  mensagem1();
  //definindo o método setTimeout para função mensagem2()
  setTimeout(mensagem2, 1000) // leva 1 segundo para ser exibida
  mensagem3();

console.log('---------------------------------------');

const somar = (x, y, z) => {
    return (x + y + z);
  };
  const media2 = (x, y, z) => {
    return (x + y + z) / 3;
  } 
  const calcular = (x, y, z, cb) => {
    return cb(x, y, z);
  } 
  console.log('Chamando o callback para realizar os cálculos');
  console.log('Valores: 10, 20, 30');
  console.log(`Calculando a soma: ${calcular(10, 20, 30, somar)}`);
  console.log(`Calculando a média: ${calcular(10, 20, 30, media2)}`);

console.log('---------------------------------------');

 function calcularDesconto (preco, porcentagemDesconto) {
    const desconto = preco * (porcentagemDesconto / 100);
    return preco - desconto;
 }

 // Função que recebe o preço e a porcentagem de desconto e a função de callback para executar
 function calcularPrecoFinal (preco, porcentagemDesconto, callback) {
    const precoFinal = callback(preco, porcentagemDesconto);
    console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
 }

 //chamando a função passando os parâmetros e a função de callback
 calcularPrecoFinal(100, 10, calcularDesconto);
 calcularPrecoFinal(1200, 15, calcularDesconto);

console.log('---------------------------------------');

function exibirHoraAtual(callback) {
    setInterval(() => {  // executa uma função em um determinado tempo - no caso 1000 mil milisegundos  / 1 segundo
        const agora = new Date();
        const hora = agora.getHours();
        const minutos = agora.getMinutes();
        const segundos = agora.getSeconds();
        const horaAtual = `${hora}:${minutos}:${segundos}`;
        callback(horaAtual);
    }, 1000); // definido os 1000 mil milisegundos  / 1 segundo
}

function exibirHora(horaAtual) { 
    console.log(horaAtual);
}

// exibirHoraAtual(exibirHora); //- comentando chamada para não ficar gerando os horários no console


console.log('---------------------------------------');
// Function Expression
console.log('---------- IIFE Function ------------');
console.log('------- aplicação mais segura ---------');
console.log(' ');

const calcularValores = (valor1, valor2) => {
    console.log(`Resultado da Soma: ${valor1 + valor2}`);
    console.log(`Resultado da Multiplicação: 
    ${valor1 * valor2}`);
  }
  calcularValores(20,10);

console.log('---------------------------------------');

(() => {
    const calcularValores = (valor1, valor2) => {
      console.log(`Resultado da Soma: ${valor1 + valor2}`);
      console.log(`Resultado da Multiplicação: ${valor1 * 
      valor2}`);
      console.log(`Sem escopo global – não são acessadas`);
    }
    calcularValores(30, 30);
    })();

console.log('---------------------------------------');

function init() {
    console.log('Usando uma função inicial');
    const calcularValores = (valor1, valor2) => {
      console.log(`Resultado da Soma: ${valor1 + valor2}`);
      console.log(`Resultado da Multiplicação: ${valor1 * 
      valor2}`);
    }
    calcularValores(20, 10);
  }
  init();

 console.log('---------------------------------------');

(function () {
    let carrinho = '';

    function adicionarAoCarrinho(item) {
        carrinho += item + ', ';
        console.log(item + ' adicionado ao carrinho!'); 
    }

    function obterCarrinho() {
        return carrinho;
    }

    adicionarAoCarrinho('Livro de HTML');
    adicionarAoCarrinho('Livro de CSS');
    adicionarAoCarrinho('Livro de Javascript');
    adicionarAoCarrinho('Livro de Java');

    console.log('Itens no carrinho: ' + obterCarrinho());
})(); 

console.log('---------------------------------------');

let calcularPrecoLocacao = (function () {
    let precoBasePorDia = 250;
    let precoPorKm = 2.25;

    function calcularPreco(dias, distancia) {
        return (precoBasePorDia * dias) + (precoPorKm * distancia);
    }

    return calcularPreco;
})();

console.log('Preço da locação: R$' + calcularPrecoLocacao(5, 100));

console.log('---------------------------------------');
// Function Expression
console.log('------- ***** ---------');
console.log(' ');