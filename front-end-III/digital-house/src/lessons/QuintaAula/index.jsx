import './style.scss'
import youtubeImage from './../../assets/images/youtubeImage.png'
import batataGif from './../../assets/images/batata.gif'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'

export function QuintaAula() {

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
        <div className='quinta-aula-component'>



            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {

                    componetsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem
                                    key={component.id}
                                    item={component} />
                            )
                        }
                    )

                }



            </ul>

        </div>


    )

}