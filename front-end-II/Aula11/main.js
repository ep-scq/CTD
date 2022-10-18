// Obtem a referencia do Botão de Login
let botaoLoginReferencia = document.querySelector('#botaoLogin')

// Obtem todas as referencias dos elementos que possuírem a classe "controlador"
let controladoresReferencia = document.querySelectorAll('.controlador')

// Realiza um for em todas as referencias obtidas anteriormente
for(let controladorReferencia of controladoresReferencia) {

    // Obtem o input na posição [1] do array de filhos
    let inputReferencia = controladorReferencia.children[1]

    //Adiciona um novo Event Listener para o keyup
    inputReferencia.addEventListener('keyup', function() {

        // Verifica se o Input está válido ou não
        if(inputReferencia.checkValidity()) {

            //Caso esteja válido ele remove a classe "erro" do elemento que tiver a classe "controladora"
            controladorReferencia.classList.remove('erro')

        } else {

            //Caso esteja inválido ele adiciona a classe "erro" do elemento que tiver a classe "controladora"
            controladorReferencia.classList.add('erro')

        }

    })

}



// Event listener do botão de Login apenas para previnir o comportamento padrão do Submit

botaoLoginReferencia.addEventListener('click', function(event) {

    event.preventDefault()

})