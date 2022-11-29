import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout() {

    return (
        <div className="main-layout-component">

            <header className='main-layout-component-header'>

                <h1>Layout Principal</h1>

                <ul>

                    <li> <Link to="segunda-aula"> Segunda Aula </Link> </li>
                    <li> <Link to="terceira-aula"> Terceira Aula </Link> </li>
                    <li> <Link to="quarta-aula"> Quarta Aula </Link> </li>
                    <li> <Link to="quinta-aula"> Quinta Aula </Link> </li>
                    <li> <Link to="setima-aula"> Setima Aula </Link> </li>
                    <li> <Link to="oitava-aula"> Oitava Aula </Link> </li>
                    <li> <Link to="decima-terceira-aula"> Decima Terceira Aula </Link> </li>
                    <li> <Link to="decima-quarta-aula"> Decima Quarta Aula </Link> </li>
                    <li> <Link to="decima-quinta-aula/1"> Decima Quinta Aula </Link> </li>

                </ul>


            </header>

            <main className='main-layout-component-main'>

                <p>O conteúdo será carregado aqui dentro:</p>

                <Outlet />

            </main>

        </div>
    )

}
//Tudo que estiver abaixo do Outlet será carregado os filhos da rota que esta no app.jsx