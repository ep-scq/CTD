let inputCepRef = document.querySelector('#inputCep')
let inputRuaRef = document.querySelector('#inputRua')
let botaoSubmitRef = document.querySelector('button')

botaoSubmitRef.addEventListener('click', event => {
    event.preventDefault()

    //    console.log(inputCepRef.value)

    let apiCep = fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`)
        .then(
            response => {
                console.log(response)
                response.json()
                    .then(
                        data => {
                            console.log(data)
                            consulta(data)
                        }
                    )
            }
        )
})