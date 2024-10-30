function carregarProvedoras(){
    fetch("http://localhost:1521/provedora")
        .then(res => res.json())
        .then(res => montarTabela(res))
}

function montarTabela(listaProvedoras){
    var tabela = 
        "<table class='table table-striped'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Provedora</th>" +
        "<th scope='col'>Fundação</th>" +
        "<th scope='col'>Site</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>";
        
        for(cont = 0; cont < listaProvedoras.length; cont++){
            tabela +=
             "<tr>" +
             "<th scope='row'>" + listaProvedoras[cont].nome + "</th>" +
             "<td>" + listaProvedoras[cont].fundacao + "</td>" +
             "<td><a target='_blank' href='http://" + listaProvedoras[cont].site +"'>" + listaProvedoras[cont].site + "</a></td>" +
             "</tr>";
        }

    tabela += "</tbody>";
    tabela += "</table>";

    document.getElementById("tabela").innerHTML = tabela;
}


// PESQUISAR 

function pesquisar(){
    var url = "http://localhost:1521/provedora/filter";

    var filtro = "";

    var filtroTitulo = document.getElementById("chkTitulo").checked;
    var filtroData = document.getElementById("chkData").checked;
    
    if(filtroTitulo == false && filtroData == false){
        alert("Escolha ao menos uma opção de filtro");
        return;
    }

    // if(filtroTitulo == true){
    //     filtro = {
    //         'nome': document.getElementById("txtProvedora").value
    //     }
    // }

    else if(filtroTitulo == true && filtroData == false){
        filtro = {
            'nome': document.getElementById("txtProvedora").value
        }
    }

    else if(filtroTitulo == false && filtroData == true){
        filtro = {
            'dataInicial': document.getElementById("txtDataInicial").value.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1'),
            'dataFinal': document.getElementById("txtDataFinal").value.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
        }
    }

    else if (filtroTitulo == true && filtroData == true){
        filtro = {
            'nome': document.getElementById("txtProvedora").value,
            'dataInicial': document.getElementById("txtDataInicial").value.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1'),
            'dataFinal': document.getElementById("txtDataFinal").value.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
        }
    }

    var envelope = {
        method: "POST",
        body: JSON.stringify(filtro),
        headers: {
            "Content-type": "application/json"
        }
    }

    fetch(url,envelope)
        .then(res => res.json())
        .then(res => {
            montarTabela(res)
        })
        .catch(err => {
            window.alert("Nenhuma provedora encontrada para o filtro selecionado");
        });
}

// APAGAR 

function apagar(id){
    var resposta = window.confirm("Clique em OK para EXCLUIR o usuário!");
    if (resposta == true) {
        var usuariologado = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (id == usuariologado.id) {
            window.alert("Não pode apagar o usuário logado");
        } else {
            fetch("http://localhost:8080/usuario/" + id,
                {
                    method: 'DELETE'
                })
                .then(res => {
                    window.alert("Usuário apagado");
                    listarUsuarios();
            })
            .catch(err => {
                window.alert("Ocorreu um erro... não foi possível excluir o usuário!");
            });
        }
    }
}