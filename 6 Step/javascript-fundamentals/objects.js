const user = require('./user.json');
console.log(user);
console.log(user.name);
console.log(user.socialMedias);
console.log(user.roles.join(', '));

//adicionando informação ao json diretamente do js
user.salario = 5000;

console.log(user);

console.log(`Meu nome é: ${user.name}`);
console.log(`Minhas atuações são como: ${user.roles.join(' - ')}`);
console.log('Minhas redes sociais são:');
const socialMediaKeys = Object.keys(user.socialMedias);
socialMediaKeys.forEach((socialMedia) => {
	console.log(
		` - ${socialMedia.toUpperCase()}: ${user.socialMedias[socialMedia]}`
	);
});

user.calculateAge = function () {
	const birthDate = new Date(this.birthDate);
	const currentDate = new Date();
	return currentDate.getFullYear() - birthDate.getFullYear();
};
console.log(`Minha idade é: ${user.calculateAge()}`);

// console.log(JSON.stringify(user)); 

const jsonUser = JSON.stringify(user); //STRINGIFY = converte objeto em json - para transitar pelas api's
console.log(jsonUser);
console.log(JSON.parse(jsonUser)); // PARSE - converte json em objeto