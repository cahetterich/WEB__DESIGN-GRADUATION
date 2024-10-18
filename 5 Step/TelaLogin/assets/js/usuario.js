
// LOGIN
function efetuarLogin(){
    var url = "http://localhost:8080/login";
    var usuario = {
        // "email": "bill@gates.com",
        // "senha": "123"
        'email': document.getElementById("txtEmail").value,
        'senha': document.getElementById("txtSenha").value
    };

    var envelope = {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-type": "application/json"
        }
    };

    fetch(url,envelope)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("usuarioLogado", JSON.stringify(res));
            window.location = "../pages/usuario.html";
        })
        .catch(err => {
            window.alert("Usuário ou senha inválidos!");
        });
}

// USUARIO
function carregarUsuario(){
    var usuarioLogado = localStorage.getItem("usuarioLogado");
    if(usuarioLogado == null){
        window.location = "../../login.html";
    }
    else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("foto").innerHTML = 
            "<img width='40%' height='100%' src=../img/perfil.png" + usuarioJson.foto + ">";
        document.getElementById("dados").innerHTML = 
            "<h3>" + 
                usuarioJson.nome + "<br>" +
                usuarioJson.email + "<br>" +
                "ID: " + usuarioJson.id + "<br>" +
            "</h3>";
        
    }
}

// NOVO USUARIO
function gravar(){
    var url = "http://localhost:8080/usuario";
    var usuario = {
        'nome': document.getElementById("txtNome").value,
        'foto': document.getElementById("txtFoto").value,
        'email': document.getElementById("txtEmail").value,
        'senha': document.getElementById("txtSenha").value
    };

    var envelope = {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-type": "application/json"
        }
    };

    fetch(url,envelope)
        .then(res => res.json())
        .then(res => {
            window.alert("Usuário cadastrado com sucesso!")
            window.location = "../pages/novousuario.html";
        })
        .catch(err => {
            window.alert("Ocorreu um erro ao salvar os dados do usuário...");
        });
}

// TODOS OS USUARIOS

// function listarUsuarios(){
//     fetch("http://localhost:8080/usuario")
//         .then(res => res.json())
//         .then(res => montarTabela(res))
// }

// function montarTabela(listaUsuarios){
//     var tabela = 
//         "<table class='table table-striped'>" +
//         "<thead>" +
//         "<tr>" +
//         "<th scope='col'>#</th>" +
//         "<th scope='col'>Nome</th>" +
//         "<th scope='col'>Email</th>" +
//         "<th scope='col'>Foto</th>" +
//         "</tr>" +
//         "</thead>" +
//         "<tbody>";
        
//         for(cont = 0; cont < listaUsuarios.length; cont++){
//             tabela +=
//              "<tr>" +
//              "<th scope='row'>" + listaUsuarios[cont].id + "</th>" +
//              "<td>" + listaUsuarios[cont].nome + "</td>" +
//              "<td>" + listaUsuarios[cont].email + "</td>" +
//              "<td>" + listaUsuarios[cont].foto + "</td>" +
//              "</tr>";
//         }
//     tabela += "</tbody>";
//     tabela += "</table>";
//     document.getElementById("dados").innerHTML = tabela;
// }

function listarUsuarios(){
       var url ="http://localhost:8080/usuario";

       fetch(url)
            .then(res => res.json())
            .then(res => montarTabela(res))
    };
    
    function montarTabela(listaUsuarios){
        var tabela = 
            "<table class='table table-striped'>" +
            "<thead>" +
            "<tr>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Nome</th>" +
            "<th scope='col'>Email</th>" +
            "<th scope='col'>Foto</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
            
            for(cont = 0; cont < listaUsuarios.length; cont++){
                tabela +=
                 "<tr>" +
                 "<th scope='row'>" + listaUsuarios[cont].id + "</th>" +
                 "<td>" + listaUsuarios[cont].nome + "</td>" +
                 "<td>" + listaUsuarios[cont].email + "</td>" +
                 "<td>" + listaUsuarios[cont].foto + "</td>" +
                 "<td><button onclick='apagar(" + listaUsuarios.[cont].id + ")'type='button' class='btn btn-danger'>Apagar</button></td>" +
                 "</tr>";
            }

        tabela += "</tbody>";
        tabela += "</table>";
        
        document.getElementById("dados").innerHTML = tabela;
    }