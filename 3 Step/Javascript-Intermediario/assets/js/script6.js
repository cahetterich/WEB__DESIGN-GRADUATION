console.log(' ');
console.log('---------- DOM -----------');
console.log(' ');

// pegando elementos pelo id - forma mais antiga

const getId1 = document.getElementById('aluno-um');
console.log(getId1);

// pegando elementos pelo id - forma mais moderna

const getId2 = document.querySelector('#aluno-um'); // precisa sinalizar o id com #
console.log(getId2);

// pegando elementos pela class

const getClass1 = document.getElementsByClassName('nome'); // todos os nomes em um array
console.log(getClass1);
console.log(getClass1[2]);
console.log(getClass1[2].textContent);

getClass1[2].textContent = 'Eu mesmo';


// pegando elementos class - forma mais moderna
getClass2 = document.querySelectorAll('.nome'); //  querySelectorAll para puxar todos os elementos de mesma class
console.log(getClass2);

// pegando elemento pela tag
getTag1 = document.getElementsByTagName('td'); // getElementsByTagName - entende que é uma tag 
console.log(getTag1);

const getTag2 = document.querySelectorAll('tr');
console.log(getClass2);

console.log('--------------------------------');





