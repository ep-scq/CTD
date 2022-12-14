import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import './style.scss'

export function MainLayout() {

    let contents = {
        english: {},
        portuguese: {},
    }

    // Importação do Tema utilização o Hook customizado "useTheme"
    const { theme } = useTheme()

    return (
        // Alteração da Classe baseado no valor do Tema
        <div className={`main-layout-component ${theme}`}>
            <header className='main-layout-component-header'>
                <h1>Front-end III - React</h1>
            </header>

            <aside className='main-layout-component-aside'>

                <section>
                    <h1>Aulas</h1>

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

                </section>

                <section>
                    <h1>Telas</h1>
                    <ul>
                        <li>
                            <Link to="to-do">To Do</Link>
                        </li>
                        <li>
                            <Link to="configurations">Configurações</Link>
                        </li>
                    </ul>
                </section>
            </aside>




            <main className='main-layout-component-main'>

                <Outlet />

            </main>

        </div>
    )

}
//Tudo que estiver abaixo do Outlet será carregado os filhos da rota que esta no app.jsx