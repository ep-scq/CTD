import './style.scss'
import youtubeImage from './../../assets/images/youtubeImage.png'
import batataGif from './../../assets/images/batata.gif'

export function QuartaAula() {

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
        <div className='quarta-aula-component'>

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {

                    componetsFinded.map(
                        component => {
                            return (
                                <li key={component.id}>
                                    <img src={component.image} alt="" />
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>
                            )
                        }
                    )

                }



            </ul>

        </div>


    )

}