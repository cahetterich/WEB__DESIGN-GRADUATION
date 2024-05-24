console.log('---------------------------------------');
// Function Expression
console.log('------- Function Expression ---------');

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


console.log('---------------------------------------');
// Function Expression
console.log('------- Arrow Function  ---------');