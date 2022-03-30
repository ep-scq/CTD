let inputsReferences = document.querySelectorAll('input')
let nameError = false
let hobbies = []
let subscribeButtonReference = document.querySelector('#inscrever')

for(let input of inputsReferences) {

    // Obtem apenas os inputs do tipo checkbox
    if(input.type === 'checkbox') {

        // Adiciona um Event Listener de Click nos Checkbox
        input.addEventListener('click', function() {

            // Verifica se ele está checkado
            if(input.checked) {

                // Verifica se o array "hobbies" possuí menos do que 4 itens
                if(hobbies.length < 4) {

                    // Adiciona o Id do Checkbox clickado para dentro do array "hobbies"
                    hobbies.push(input.id)

                } else {

                    // Retira o checked do checkbox clickado
                    input.checked = false

                    // Exibe uma mensagem de erro no console
                    console.log('numero máximo de hobbies ja foi preenchido')

                }

            } else {

                // Remove o Id do Checkbox clickado de dentro do array "hobbies"
                hobbies = hobbies.filter( item => item !== input.id )

            }

            // Verifica se o comprimento do array de Hobbies é igual a 0, ou seja, vazio
            if(hobbies.length === 0) {

                // Desabilita o botão
                subscribeButtonReference.disabled = true

            } else {

                // Habilita o botão
                subscribeButtonReference.disabled = false

            }

        })

    }

}