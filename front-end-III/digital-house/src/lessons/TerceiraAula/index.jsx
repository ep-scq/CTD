import './style.scss'
// import batataGif from './../../assets/images/batata.gif'

export function TerceiraAula() {

    const title = 'Teste'
    const components = [

        { name: 'Component Card0', description0: 'teste0', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },

        { name: 'Component Card1', description1: 'teste1', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },

        { name: 'Component Card2', description2: 'teste2', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },

        { name: 'Component Card3', description3: 'teste3', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        
        { name: 'Component Card4', description4: 'teste4', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' }
    ]

    return (
        <main>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                            <img src={component.image} />
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }

            </ul>
        </main>
    )
}