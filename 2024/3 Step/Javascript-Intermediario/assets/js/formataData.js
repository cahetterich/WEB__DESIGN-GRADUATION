console.log(' ');
console.log('---------- FORMATAÇÃO DATA -----------');
console.log(' ');

// pega a data atual e insere no rodapé da tabela 

function formataData() {
    //pegando o Atributo na página HTML
    const dataAtualizacao = document.querySelector('[data-JS]');
    //pegando a data completa
    const dataAtual = new Date();
    //formatando a data
    const formatarData = Intl.DateTimeFormat('pt-BR', {
        dateStyle: "long",
    });
    dataAtualizacao.textContent += formatarData.format(dataAtual);
}