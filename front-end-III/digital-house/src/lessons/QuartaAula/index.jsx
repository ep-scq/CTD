import './style.scss'
import youtubeImage from './../../assets/images/youtubeImage.png'
import batataGif from './../../assets/images/batata.gif'

export function QuartaAula() {

    const componetsFinded = [
        {
            id: 1,
            title: 'Página do youtube',
            image: youtubeImage,
            text: 'Print da página principal do site youtube.com'
        },
        {
            id: 2,
            title: 'Gif da batata',
            image: batataGif,
            text: 'Gif animado de batatas dançando'
        }
    ]


    return (
        <div className='quarta-aula-component'>

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {

                    componetsFinded.map(
                        component => {
                            return (
                                <li key={component.id}>
                                    <h2>{component.title}</h2>
                                    <p>{component.text}</p>
                                    <img src={component.image} alt="" />
                                </li>
                            )
                        }
                    )

                }



            </ul>

        </div>


    )

}