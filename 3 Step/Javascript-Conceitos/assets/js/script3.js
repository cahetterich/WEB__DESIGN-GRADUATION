
console.log('--------------------------');
//Objeto Math
console.log(`---- Objeto Math ----`);

const numero = 50.79;

//Math.ceil() - - arredonda o número para um valor maior
console.log(`Math.ceil (${numero}) = ${Math.ceil(numero)}`);

//Math.floor() - - arredonda o número para o valor que está
console.log(`Math.floor (${numero}) = ${Math.floor(numero)}`);

//Math.round() - arredonda o número para o valor mais próximo
console.log(`Math.round (${25.34}) = ${Math.round(25.34)}`);

console.log(`Math.round (${25.84}) = ${Math.round(25.84)}`);

//Math.max() - maior número
console.log(`Math.max (${13,45,23,89,12,11,2}) = ${Math.max(13,45,23,89,12,11,2)}`);

//Math.min() - menor número
console.log(`Math.min (${13,45,23,89,12,11,2}) = ${Math.min(13,45,23,89,12,11,2)}`);

//parseInt() -  retorna apenas a parte inteira
console.log(`parseInt (${numero}) = ${parseInt(numero)}`);

//Math.pow() - calcula a potência 3 elevado a 2
console.log(`Math.pow (${3, 2}) = ${Math.pow(3, 2)}`);
//ou 
console.log(`3 elevado a 2 = ${3**2}`);

//Math.random() - sorteia um número de 0 a 1
console.log(`Math.random  - Número retornado: ${Math.random()}`);

let numeroSorteado = Math.random(); // para armazernar o random
console.log(numeroSorteado);

// Math.sqrt() - calcula a raiz quadrada
console.log(`Math.sqrt - Número retornado 81: ${Math.sqrt(81)}`);

//Math.cbrt() - calcula a raiz cubica
console.log(`Math.cbrt - Número retornado 27: ${Math.cbrt(27)}`);

console.log('--------------------------');
//Random + Floor
console.log(`---- Sorteando Números ----`);

//criando as variáveis e sorteando (random) os números inteiros (floor) de 0 a 99
const numero1 = Math.floor(Math.random() * 10);
const numero2 = Math.floor(Math.random() * 100);
const numero3 = Math.floor(Math.random() * 1000);
const numero4 = Math.floor(Math.random() * 10000);

//exibindo os números sorteados
console.log(`Número sorteado: ${numero1}`);
console.log(`Número sorteado: ${numero2}`);
console.log(`Número sorteado: ${numero3}`);
console.log(`Número sorteado: ${numero4}`);

//gerar o número random
let numero5 = Math.random();
console.log(numero5);
// mover a vírgula duas casas para a direita
numero5*=100;
console.log(numero5);
// arredondar o número para inteiro 
numero5 = parseInt(numero5);
console.log(numero5);

console.log('--------------------------');
// Objeto String
console.log(`---- Objeto String ----`);

//criando minha string
const minhaString = 'Javascript é uma linguagem de programação poderosa!';
console.log(minhaString);

//propriedade length - retorna a quantidade de caracteres da minha string (conta os espaços)
console.log(`Tamanho da string: ${minhaString.length}`);

//percorrendo a string - retorna o caracter assinalado a minha string
console.log(`Caracter encontrado: ${minhaString[0]}`);

//toUpperCase() - letras maiúsculas
console.log(`Letras maiúsculas: ${minhaString.toUpperCase()}`);

//toLowerCase() - letras minúsculas
console.log(`Letras minúsculas: ${minhaString.toLowerCase()}`);

//charAt() - percorrendo a string com método
console.log(`Caracter retornado: ${minhaString.charAt(0)}`);

//indexOf() - buscar algo na string - pelo início
console.log(`Caracter "s" encontrado no índice:
${minhaString.indexOf('s')}`);

//lastIndexOf() - buscar algo na string - pelo fim
console.log(`Caracter "s" encontrado no índice:
${minhaString.lastIndexOf('s')}`);

//includes() - verifica se exite com true ou false
console.log(`Caracter "s" existe na nossa string:
${minhaString.includes('s')}`);

//concat() - juntando strings
console.log(`Concatenado strings:
${'abc'.concat('def').concat('xyz')}`);

//replace() - substituindo um caracteres
console.log(`Substituindo a primeira letra a:
${minhaString.replace('a','@')}`);

//replaceAll() - substituindo todos os caracteres
console.log(`Substituindo todas as letras a:
${minhaString.replaceAll('a', '@')}`);

//substring() - pegar parte da string (puxa do 4 e para na 15)
console.log(`Pegando uma parte da string:
${minhaString.substring(4,15)}`);

//slice() - gera nova uma string
let novaString = minhaString.slice(11,38);
console.log(`Nova string gerada: ${novaString}`);

//split() - vira um array (estrutura de objetos - 1 caracter)
console.log(`Convertendo string em array:`);
console.log(minhaString.split());

//posição - valor do array
console.log(`Espaços do array - por letra:
${minhaString.split('')}`);

//posição - valor do array
console.log(`Espaços do array - por frase:
${minhaString.split(' ')}`);

//trim() - retirando espaços da string (inicio e fim) ********bom para mensagem e dados dos usuários
console.log(`Removendo espaços no início e fim:
${minhaString.trim()}`);

//startWith() - Verificando se a string começa com uma cadeia de caracteres - case sensitive ( devemos converter maiusculo/ minusculo antes)
console.log(`Verificando se a string inicia com "Java":
${minhaString.startsWith('Java')}`);

//endsWith() - Verificando se a string termina com uma cadeia de caracteres - case sensitive ( devemos converter maiusculo/ minusculo antes)
console.log(`Verificando se a string termina com "Java":
${minhaString.endsWith('Java')}`);

//includes()
console.log(`Verificando se existe na string:
${minhaString.includes('ava')}`);

//includes()
console.log(`Verificando se começa com a string:
${minhaString.startsWith('Java')}`);

//includes()
console.log(`Verificando se termina com a string:
${minhaString.endsWith('rosa!')}`);

console.log('--------------------------');
// Objeto String
console.log(`---- Objeto Date ----`);

//utilizando o método construtor
const dataAtual = new Date();

//exibindo o objeto
console.log(`Data atual: ${dataAtual}`);

//milisegundos
console.log(`Milisegundos: ${dataAtual.getTime()}`);

//dia da semana
console.log(`Dia da semana: ${dataAtual.getDay()+1}`); // incluimos +1 para ajeitar o dia da semana corretamente

//dia da semana - utilizando switch
let dataDia = dataAtual.getDay()

let diaSemanaExtenso;
// colocando o dia da semana por extenso
switch(dataDia){
    case 0 :
    console.log('Hoje é Domingo');
    diaSemanaExtenso = 'Domingo';
    break

    case 1 :
    console.log('Hoje é Segunda-Feira');
    diaSemanaExtenso = 'Segunda';
    break

    case 2 :
    console.log('Hoje é Terça-Feira');
    diaSemanaExtenso = 'Terça-Feira';
    break
    
    case 3 :
    console.log('Hoje é Quarta-Feira');
    diaSemanaExtenso = 'Quarta-Feira';
    break

    case 4 :
    console.log('Hoje é Quinta-Feira');
    diaSemanaExtenso = 'Quinta-Feira';
    break

    case 5 :
    console.log('Hoje é Sexta-Feira');
    diaSemanaExtenso = 'Sexta-Feira';
    break

    default :
    console.log('Hoje é Sábado');
    diaSemanaExtenso = 'Sábado';
}


//dia do mês
console.log(`Dia do mês: ${dataAtual.getDate()}`);

//dia do mês números menores que 10 - atribuindo 0 na frente do número
let dataMes = dataAtual.getDate();
if(dataMes < 10){
    dataMes = "0"+dataMes;
}

console.log(`Dia do mês - com 0 na frente: ${dataMes}`);


//mês
console.log(`Mês atual: ${dataAtual.getMonth()+1}`); // incluimos +1 para ajeitar o dia da semana corretamente

//pegando o mês e incluindo o 0 na frente de números menores que 10
let mesAtual = dataAtual.getMonth() +1; // incluimos +1 para ajeitar o dia da semana corretamente
console.log(mesAtual);

let mesAtualZero = (mesAtual < 10) ? "0"+mesAtual : mesAtual;
console.log(mesAtualZero);

// colocando o mês por extenso

switch(mesAtual-1){
    case 0 :
    console.log('Janeiro');
    break

    case 1 :
    console.log('Fevereiro');
    break

    case 2 :
    console.log('Março');
    break
    
    case 3 :
    console.log('Abril');
    break

    case 4 :
    console.log('Maio');
    break

    case 5 :
    console.log('Junho');
    break

    case 6 :
    console.log('Julho');
    break

    case 7 :
    console.log('Agosto');
    break

    case 8 :
    console.log('Setembro');
    break

    case 9 :
    console.log('Outubro');
    break

    case 10 :
    console.log('Novembro');
    break

    default :
    console.log('Dezembro');
}

//ano
let anoAtual = dataAtual.getFullYear();
console.log(`Ano atual: ${anoAtual}`);

//hora
console.log(`Hora: ${dataAtual.getHours()}`);

//hora com 0 na frente
let horaAtual = dataAtual.getHours();
horaAtual = (horaAtual <10) ?"0"+horaAtual : horaAtual;
console.log(`Hora: ${horaAtual}`);

//minutos
console.log(`Minutos: ${dataAtual.getMinutes()}`);

//minuto com 0 na frente
let minutoAtual = dataAtual.getMinutes();
minutoAtual = (minutoAtual <10) ?"0"+minutoAtual : minutoAtual;
console.log(`Minuto: ${minutoAtual}`);

//segundos
console.log(`Segundos: ${dataAtual.getSeconds()}`);

//segundos com 0 na frente
let segundoAtual = dataAtual.getSeconds();
segundoAtual = (segundoAtual <10) ?"0"+segundoAtual : segundoAtual;
console.log(`Segundo: ${segundoAtual}`);

//milisegundos
console.log(`Milisegundos: ${dataAtual.getMilliseconds()}`);

//Montando a data
console.log(`Data: ${diaSemanaExtenso}, ${dataMes}/${mesAtualZero}/${anoAtual}, ${horaAtual}:${minutoAtual}:${segundoAtual}`);