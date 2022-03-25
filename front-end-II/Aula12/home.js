let nomeUsuarioReferencia = document.querySelector('#nomeUsuario')
let idadeUsuarioReferencia = document.querySelector('#idadeUsuario')

// Obtem os dados salvo em JSON do usuario salvo no localStorage e converte o JSON para um Objeto do próprio JavaScript
let usuarioDados = JSON.parse( localStorage.getItem('usuario') )

nomeUsuarioReferencia.innerHTML = usuarioDados.nome
idadeUsuarioReferencia.innerHTML = usuarioDados.idade