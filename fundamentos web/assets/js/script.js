let nome = document.getElementById('nome')
let email = document.querySelector('#email')

nome.style.width = '100%'
email.style.width = '100%'

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