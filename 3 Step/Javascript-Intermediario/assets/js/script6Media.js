
// buscar o botão "calcular média"
const btnCalcular = document.querySelector('#calcular');
// console.log(btnCalcular);

// "escutador" de eventos - ao click / botão
btnCalcular.addEventListener('click', () => {
    
    // pegar os alunos
    const alunos = document.querySelectorAll('.aluno'); // pegar a class alunos
    // console.log(alunos); // aparece só quando clicar no botão


// percorrer o array do herói e pegar as informações
    alunos.forEach((aluno) => {

        const forca = Number(aluno.querySelector('.nota1').textContent);
        const velocidade = Number(aluno.querySelector('.nota2').textContent);
        const agilidade = Number(aluno.querySelector('.nota3').textContent);
        const media = (forca + velocidade + agilidade) / 3;

        // escrevendo na página
        aluno.querySelector('.media').textContent = media.toFixed(1);
        
        //  vamos colocar classe do bootstrap
        if (media < 6) {
            aluno.classList.add('bg-danger', 'text-light'); // adiciona as classes do bootstrap na class dos alunos com nota inferior a 6
        }
    });    
});
