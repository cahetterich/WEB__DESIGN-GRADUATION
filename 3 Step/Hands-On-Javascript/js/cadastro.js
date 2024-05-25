
console.log('------- cadastro ---------');
console.log(' ');

const tbody = document.querySelector('tbody');
console.log(tbody);

// escutador do evento
//pegar o formulário - cancelar o evento padrão - chamar uma função
document.querySelector('form').addEventListener('submit', function(e) { // escutador do evento do submit

    // cancelar o evento padrão
    e.preventDefault();

    //criamos um array
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta'),
    ];
    console.log(campos); // ao incluirmos dados no formulário, aparece no console


    //criar a tr - alocar informações
    const tr = document.createElement('tr'); // cria qualquer elemento HTML na página

    //percorrer o Array (campo = inputs)para pegar as informações e criar a td
    campos.forEach(campo => {

        //criar uma td
        const td = document.createElement('td'); // 1 td para o usuário, 1 td para email....cada um gera 1 td

        //pegar o valor do campo e passar para td
        td.textContent = campo.value; // o valor do campo vai para td

        //atribuir a td ao elemento tr
        tr.appendChild(td); // o td vai para tr
    });

    //colocar a tr dentro do tbody
    tbody.appendChild(tr); // o tr vai para tbody

    //limpar os campos do formulário
    this.reset();
});


