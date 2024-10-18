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