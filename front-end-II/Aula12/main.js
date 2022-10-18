let botaoLogarReferencia = document.querySelector('#logar')

botaoLogarReferencia.addEventListener('click', function(event) {

    let inputNomeUsuario = document.querySelector('input')
    let inputIdadeUsuario = document.querySelectorAll('input')[1]

    let usuarioDados = {

        nome: inputNomeUsuario.value,
        idade: inputIdadeUsuario.value

    }

    //Salva no localStorage o valor convertido para JSON do objeto "usuarioDados"
    localStorage.setItem('usuario', JSON.stringify(usuarioDados))

    // Redireciona o usuário para a página Home
    window.location.href = 'home.html'

})