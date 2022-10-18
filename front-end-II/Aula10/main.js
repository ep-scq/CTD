let inputNomeReferencia = document.querySelector('#inputNome')
let inputTermosReferencia = document.querySelector('#inputTermos')
let botaoConcluirCadastroReferencia = document.querySelector('#botaoConcluirCadastro')
let inputsTipoPessoaReferencia = document.getElementsByName('#tipoPessoa')
let selectCidadeReferencia = document.querySelector('#selectCidade')
let usuario = {}

botaoConcluirCadastroReferencia.addEventListener('click', function(event){

    event.preventDefault()

    usuario.nome = inputNomeReferencia.value.trim().toUpperCase()
    usuario.aceitouTermos = inputTermosReferencia.checked

    for(let inputTipoPessoa of inputsTipoPessoaReferencia) {

        if(inputTipoPessoa.checked) {

            usuario.tipoPessoa = inputTipoPessoa.value

        }

    }

    usuario.cidade = selectCidadeReferencia.value

    console.log(usuario)

})