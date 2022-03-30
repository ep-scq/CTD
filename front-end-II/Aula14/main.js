let inputCepRef = document.querySelector('#inputCep')
let inputRuaRef = document.querySelector('#inputRua')
let botaoSubmitRef = document.querySelector('button')

botaoSubmitRef.addEventListener('click', event => {
    event.preventDefault()

    //    console.log(inputCepRef.value)

    fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`)
        .then(
            response => {
                console.log(response)
                response.json()
                    .then(
                        data => {
                            inputRuaRef.value = data.logradouro
                            console.log(data)
                        }
                    )
            }
        )
})