let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

function validaNome() {
    if(nome.value.length < 3) {
        let txtNome = document.querySelector('#txtNome')
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

/*Efeitos de mouse redes sociais*/
function mudaFoto(foto){
  document.getElementById("face").src = foto
}

function trocaLogo(logo){
  document.getElementById("insta").src = logo
}

function mudaLinkedin(icone){
  document.querySelector("#linkedin").src = icone
}

function mudaGit(git) {
    document.querySelector('#github').src = git
}