import './style.scss'
import youtubeImage from './../../assets/images/youtubeImage.png'
import batataGif from './../../assets/images/batata.gif'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'

export function QuintaAula() {

    const componetsFinded = [
        {
            id: 1,
            title: 'Vídeo Component',
            image: youtubeImage,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci.'
        },
        {
            id: 2,
            title: 'Input Component',
            image: batataGif,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci.'
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