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

function mostrarAjuda() {

    ajudaNomeReference.classList.add('show')
    ajudaEmailReference.classList.add('show')
    ajudaMensagemReference.classList.add('show')

}

function esconderAjuda() {

    ajudaNomeReference.classList.remove('show')
    ajudaEmailReference.classList.remove('show')
    ajudaMensagemReference.classList.remove('show')

}

buttonReference.addEventListener('click', function(event) {

    mostrarMensagem()
    event.preventDefault()

})

msgReference.addEventListener('keyup', function(event){
    console.log('Digitando...')
})

nomeReference.addEventListener('mouseover', mostrarAjuda)
emailReference.addEventListener('mouseover', mostrarAjuda)
msgReference.addEventListener('mouseover', mostrarAjuda)

nomeReference.addEventListener('mouseout', esconderAjuda)
emailReference.addEventListener('mouseout', esconderAjuda)
msgReference.addEventListener('mouseout', esconderAjuda)

