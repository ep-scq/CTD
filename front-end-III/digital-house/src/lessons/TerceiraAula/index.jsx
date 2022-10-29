import './style.scss'
import vimeoPlanos from './../../assets/images/vimeoplanos.png'
import vimeoHeader from './../../assets/images/vimeoheaderentrada.png'
import vimeoCarrossel from './../../assets/images/vimeocarrosselcomentarios.png'
import vimeoInscricao from './../../assets/images/vimeocardinscricao.png'
export function TerceiraAula() {

    const title = 'Teste'
    const components = [

        { name: 'Card de Entrada', description: 'Vídeo de apresentação', image: 'https://i.vimeocdn.com/custom_asset/8bde48e510ec8c3c437a3a356c4d7ca0?w=1460&q=60' },

        { name: 'Card de Planos', description: 'Opções de planos', image: vimeoPlanos },

        { name: 'Header de Entrada', description: 'Header da página principal', image: vimeoHeader },

        { name: 'Carrossel de Comentários', description: 'Comentários sobre o serviço', image: vimeoCarrossel },
        
        { name: 'Janela pop-up de Inscrição', description: 'Janela de inscrição', image: vimeoInscricao }
    ]

    return (
        <main>
            <h1>Lista de componentes encontrados site Vimeo</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                            <img src={component.image} />
                        </li>
                    ))
                }

            </ul>
        </main>
    )
}