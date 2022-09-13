function login(){
    let emailCad = document.querySelector("#emailCad")
    let senhaCad = document.querySelector("#senhaCad")
    let listaUser = []
    let uservalid = {
        email: '', 
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) => {
        if(email.value == item.emailCad && senha.value == item.senhaCad){
            uservalid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });
    if(email.value == uservalid.email && senha.value == uservalid.senha){
        let chave = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem("chave", chave);
        window.location.href="index.html"
    } else {
        window.location.href="login.html"
        console.log("Usuario ou senha incorreto")
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

/*if(localStorage.getItem("chave") == null){
    window.location.href="login.html"
}*/

function sair(){
    /*localStorage.removeItem('chave')*/
    window.location.href="login.html"

}

/*
let viewer = document.querySelector("checkbox")
function visualizar(){
    input.addEventListener("senha", view)
    if("checkbox" == false && "checkbox" == ""){
        document.getElementById("senha").type = "password";
    } else {
        document.getElementById("senha").type = "text";
    }
}*/

let viewer = document.querySelector('#view')
viewer.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})