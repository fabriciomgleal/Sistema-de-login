var logado = false;
if(localStorage.getItem("acesso") == "true"){
    logado = true;
}

if(logado == false){
    alert("Favor inserir o login e senha!");
    window.location.href="login.html";
}