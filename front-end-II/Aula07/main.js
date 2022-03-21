let buttonReference = document.querySelector('#button')
let titleHintReference = document.querySelector('#titleHint')
let titleInputReference = document.querySelector('#titleInput')
let mensagemSucessoReference = document.querySelector('#mensagemSucesso')

// Evento que verifica se pagina ja foi totalmente carregada
window.onload = function() {

    console.log('Agora a página está carregada comopletamente')

}



// Função que mostra a mensagem de Sucesso
function mostrarMensagem() {

    mensagemSucessoReference.classList.toggle('show')

}



// Função que mostra a mensagem de Sucesso
function mostrarSugestao() {

    titleHintReference.classList.add('show')

}



// Função que esconde a Sugestão
function esconderSugestao() {

    titleHintReference.classList.remove('show')

}



// Escutando o evento Click
buttonReference.addEventListener('click', function(event) {

    mostrarMensagem()
    event.preventDefault()

})



// Escutando o evento Keyup
titleInputReference.addEventListener('keyup', function(event){
    console.log('digitando...')
})



// Escutando o evento MouseOver
titleInputReference.addEventListener('mouseover', mostrarSugestao)



// Escutando o evento MouseOut
titleInputReference.addEventListener('mouseout', esconderSugestao)