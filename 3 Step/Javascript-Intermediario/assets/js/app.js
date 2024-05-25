// novos dados na tabela e calcular XP dos heróis
console.log('------ Eventos ------');
console.log(' ');

console.log('------ XP dos Heróis ------');

//addEventListener  - para "escutar" o click do botão

//recuperando o botão
const btnCalcular = document.querySelector('#calcular');
//atribuindo a função ao botão recuperado
btnCalcular.addEventListener('click', () => {
    
    //recuperando os elementos que têm a classe vingador
    const vingadores = document.querySelectorAll('.vingador');
    // usando um for para percorrer o array - usaremos o forEach()
    vingadores.forEach(vingador =>{
        //recuperando o valor da força e convertendo em um número
        const forca = Number(vingador.querySelector('.forca').textContent);
        //recuperando o valor da agilidade e convertendo em um número
        const agilidade = Number(vingador.querySelector('.agilidade').textContent);
        //recuperando o valor da velocidade e convertendo em um número
        const velocidade = Number(vingador.querySelector('.velocidade').textContent);
        //calculando os xp de cada vingador
        const resultadoXP = (forca + agilidade + velocidade)/3;
        //Exibindo na página o xp correspondente
        vingador.querySelector('.xp-Final').textContent = resultadoXP.toFixed(1);
        //verificar se o XP é menor que 91 e colocar duas classes CSS para chamar a atenção ao herói
        if(resultadoXP <= 91){
            vingador.classList.add('bg-danger', 'text-light');
        }
    })  
})



console.log(' ');
console.log('------ Eventos ------');
console.log(' ');