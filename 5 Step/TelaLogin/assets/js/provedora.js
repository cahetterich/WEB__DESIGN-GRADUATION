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

    if(filtroTitulo == true){
        filtro = {
            'nome': document.getElementById("txtProvedora").value
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