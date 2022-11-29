import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function DecimaTerceiraAula() {

    const [contador, setContador] = useState(0)
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)
    const [errorForm, setErrorForm] = useState(false)
    //const { id } = useParams()

    function adicionar() {

        setContador(contador + 1)

    }

    function validar() {

        setErrorForm(!errorForm)

        console.log(errorForm)

    }


    useEffect(() => {
        console.log('carregou')

        if (userName.length < 10) {
            setUserNameError(true)
        } else {
            setUserNameError(false)
        }
    }, [userName]
    )


    return (

        <div>
            <>
                <h1>Teste</h1>
                <input type="text" value={userName} onChange={event => setUserName.target.value} />
                {userNameError ? (<small>O campo nome contém mais do que 10 caracteres</small>) : null}
                <p>O valor do Contador é {contador}</p>
                <button onClick={() => adicionar()}>Atualizar Contador</button>
                <button onClick={() => validar()}>Validar contador</button>

            </>
            


        </div>

    )


}