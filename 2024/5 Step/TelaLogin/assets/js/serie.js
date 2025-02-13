//ATUALIZAR DADOS
function atualizarDados(){
    recuperarProvedoras();
    recuperarSeries();
  }

  // RECUPERAR PROVEDORAS
  function recuperarProvedoras(){
    // var url = "http://localhost:1521/provedora";

    fetch("http://localhost:1521/provedora")
    .then(res => res.json())
    .then(res => montarDropDown(res))
  }
  
  function montarDropDown(listaProvedoras){
    var saida = "";
    for(cont = 0; cont < listaProvedoras.length; cont++){
        saida +=
            "<option value='" + listaProvedoras[cont].id + "'>" +
            listaProvedoras[cont].nome + "</option>";
    }
  
    document.getElementById("ddlProvedora").innerHTML = saida;
  }

 // RECUPERAR SERIES
  function recuperarSeries(){
    fetch("http://localhost:1521/serie")
        .then(res => res.json())
        .then(res => montarTabela(res))
  }
  
  function montarTabela(listaSeries){
    var tabela = 
        "<table class='table table-striped'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>#</th>" +
        "<th scope='col'>Serie</th>" +
        "<th scope='col'>Genero</th>" +
        "<th scope='col'>Provedora</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>";
        
        for(cont = 0; cont < listaSeries.length; cont++){
            tabela +=
             "<tr>" +
             "<th scope='row'>" + listaSeries[cont].id + "</th>" +
             "<td>" + listaSeries[cont].titulo + "</td>" +
             "<td>" + listaSeries[cont].genero + "</td>" +
             "<td>" + listaSeries[cont].provedora.nome + "</td>" +
             "</tr>";
        }
  
    tabela += "</tbody>";
    tabela += "</table>";
  
    document.getElementById("series").innerHTML = tabela;
  }

  // GRAVAR - CRIAR SERIE
  function gravar(){
    var url = "http://localhost:1521/serie";

    var lancamento = "true";
    if(document.getElementById("optnao").checked){
        lancamento = "false;"
    }
    var serie = {
        "titulo": document.getElementById("txtTitulo").value,
        "genero": document.getElementById("txtGenero").value,
        "sinopse": document.getElementById("txtSinopse").value,
        "lancamento": lancamento,
        "provedora": {
            "id": document.getElementById("ddlProvedora").value
        }
    }

    var envelope = {
        method: "POST",
        body: JSON.stringify(serie),
        headers: {
            "Content-type": "application/json"
        }
    }

    fetch(url,envelope)
        .then(res => res.json())
        .then(res => {
            window.alert("Série criada com sucesso!")
            window.location = "serie.html";
        })
        .catch(err => {
            window.alert("Ocorreu um erro ao gravar série...");
        });
}