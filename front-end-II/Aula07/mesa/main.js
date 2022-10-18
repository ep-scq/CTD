let buttonReference = document.querySelector('#button')
let nomeReference = document.querySelector('#nome')
let ajudaNomeReference = document.querySelector('#ajudaNome')
let emailReference = document.querySelector('#email')
let ajudaEmailReference = document.querySelector('#ajudaEmail')
let msgReference = document.querySelector('#msg')
let ajudaMensagemReference = document.querySelector('#ajudaMensagem')
let mensagemSucessoReference = document.querySelector('#mensagemSucesso')


window.onload = function() {

    console.log('Página carregada com sucesso')

}

function mostrarMensagem() {

    mensagemSucessoReference.classList.toggle('show')

}

function mostrarAjudaNome() {

    ajudaNomeReference.classList.add('show')

}

function mostrarAjudaEmail() {

    ajudaEmailReference.classList.add('show')

}

function mostrarAjudaMensagem() {

    ajudaMensagemReference.classList.add('show')

}



function esconderAjudaNome() {

    ajudaNomeReference.classList.remove('show')

}

function esconderAjudaEmail() {

    ajudaEmailReference.classList.remove('show')

}

function esconderAjudaMensagem() {

    ajudaMensagemReference.classList.remove('show')

}

buttonReference.addEventListener('click', function(event) {

    mostrarMensagem()
    event.preventDefault()

})

msgReference.addEventListener('keyup', function(event){
    console.log('Digitando...')
})

nomeReference.addEventListener('mouseover', mostrarAjudaNome)
emailReference.addEventListener('mouseover', mostrarAjudaEmail)
msgReference.addEventListener('mouseover', mostrarAjudaMensagem)

nomeReference.addEventListener('mouseout', esconderAjudaNome)
emailReference.addEventListener('mouseout', esconderAjudaEmail)
msgReference.addEventListener('mouseout', esconderAjudaMensagem)

