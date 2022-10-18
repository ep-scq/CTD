let buttonLoginRef = document.querySelector('#buttonLogin')

buttonLoginRef.addEventListener('click', event => {

    event.preventDefault()

    // cria o objeto que será enviado para a API

    let credentials = {

        email: 'string',
        password: 'string'

    }

    // cria o objeto que conterá os headers da requisição

    let requestHeaders = {

        'Content-Type': 'application/json'

    }

    // cria o objeto de configuração que irá ser informado como segundo parametro no fetch

    let requestConfiguration = {

        method: 'POST',
        body: JSON.stringify(credentials),
        headers: requestHeaders

    }

    // realizar o fetch normalmente mas com um parametro de configuração

    fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', requestConfiguration).then(

        response => {

            response.json().then(

                data => {

                    localStorage.setItem('token', data.jwt)

                }

            )

        }

    )

})