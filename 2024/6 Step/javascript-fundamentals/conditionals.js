const valueOne = 10;
const valueTwo = 20;

    if (valueOne > valueTwo) {
        console.log(valueOne + " is greater than " + valueTwo);
        console.log(`O valor ${valueOne} é maior que o valor ${valueTwo}.`); 
        // nesse caso não vai aparecer nada, pois 10 não é maior do que 20
    } else {
        console.log(`O valor ${valueOne} é menor que o valor ${valueTwo}.`);
    }

const valueThree = 20;
const valueFour = 20;

    if (valueThree > valueFour) {    
        console.log(`O valor ${valueThree} é maior que o valor ${valueFour}.`);         
    } else if (valueThree == valueFour) { 
        console.log(`O valor ${valueThree} é igual ao valor ${valueFour}.`); 
    } else {
        console.log(`O valor ${valueThree} é menor que o valor ${valueFour}.`);
    }