let inputNomeRef = document.querySelector("#nome")
let inputSobreNomeRef = document.querySelector("#sobreNome")
let botaoEnviarRef = document.querySelector("#botaoEnviar")
let usuario = {}

botaoEnviarRef.addEventListener("click", function(event){
    event.preventDefault()

    usuario.nome = inputNomeRef.value.trim().toUpperCase()
    usuario.sobreNome = inputSobreNomeRef.trim().toLowerCase()

    console.log(usuario)

})
