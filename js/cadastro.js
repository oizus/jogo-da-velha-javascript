function validarCadastro() {
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    confirmarSenha = document.getElementById("confirmarSenha").value;

    if (usuario == "") { //!user.value        
        alertWifi("Usuário em branco!!!", false, 0, "img/velha.png", 30);
        document.getElementById("usuario").focus();
    } else if (senha == "") {
        alertWifi("Senha em branco!!!", false, 0, "img/velha.png", 30);       
        document.getElementById("senha").focus();
    } else if (confirmarSenha == "") {
        alertWifi("Confirma Senha em branco!!!", false, 0, "img/velha.png", 30);        
        document.getElementById("confirmarSenha").focus();
    } else if (senha != confirmarSenha) {
        alertWifi("Senha e Confirma Senha diferentes!!!",false, 0, "img/velha.png", 30);
        document.getElementById("confirmarSenha").focus();
        document.getElementById("senha").focus();
    } else {
        readJSON(usuario, senha); // nome.value
    }
}

function readJSON(usuario, senha) {
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, usuario, senha) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].usuario == usuario) && (content.usuarios[i].senha == senha)) {
            achou = true;
            break;
        }
    }
    if (achou) {
        alertWifi("Esse usuário já existe. Tente outro!!!",false, 0, "img/velha.png", 30);
        document.getElementById("usuario").focus();
        document.getElementById("senha").focus();        
        document.getElementById("confirmarSenha").focus();
    } else {
        document.getElementsByTagName("form")[0].submit();
    }
}