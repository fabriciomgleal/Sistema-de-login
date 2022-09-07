function login(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        window.location.href = "index.html";
    }
    else{
        alert("Usuario ou senha invalidos!");
    }
}

function cadastrar(){
    window.location.href="cadastro.html"
}

function logar(){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
        emailCad: email.value,
        senhaCad: senha.value
    }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    window.location.href="login.html"
}