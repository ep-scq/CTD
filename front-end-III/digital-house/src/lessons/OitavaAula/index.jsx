import { useState } from 'react'
import { OitavaAulaCardProduto } from '../../components/OitavaAulaCardProduto'
import './style.scss'


export function OitavaAula() {

    // const [contador, setContador] = useState(0)
    // const [temaEscuro, setTemaEscuro] = useState(false)

    // function somarNumero(numero) {

    //     setContador(contador + numero)

    // }

    // function mudarTema() {

    //     setTemaEscuro(!temaEscuro)

    // }
    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [fotoProduto, setFotoProduto] = useState('')
    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])
    

    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function addNewProduct() {

        //allProducts.push(newProduct)
        //Spread = ... usado na linha abaixo para pegar o array existente e adicionar o novo produto.
        setAllProducts([...allProducts, ])
    }

    function cadastrarProduto(event){

        event.preventDefault()

        const novoProdutoCadastrado = {
            name: nomeProduto,
            price: precoProduto,
            picture: fotoProduto

        }

        console.log(novoProdutoCadastrado)
    }

    return (

        // <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>

        //     <h1>Contador</h1>

        //     <button onClick={() => mudarTema()}>Mudar tema</button>
        //     <button onClick={() => somarNumero(2)}>Adicionar</button>
        //     <span>Número atual: {contador}</span>

        // </main>

        <main className="oitava-aula-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                <button onClick={addNewProduct}>Adicionar novo produto</button>
            </div>

            <form>

                <div>
                    <label htmlFor="NomeProduto">Nome produto</label>
                    <input id="nomeProduto" type="text" value={nomeProduto} onChange={event => setNomeProduto(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="PrecoProduto">Preço produto</label>
                    <input id="precoProduto" type="text" value={precoProduto} onChange={event => setPrecoProduto(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="FotoProduto">Foto produto</label>
                    <input id="fotoProduto" type="text" value={fotoProduto} onChange={event => setFotoProduto(event.target.value)} />
                </div>

                <button type='submit' onClick={event => cadastrarProduto(event)}>Cadastrar Produto</button>



            </form>

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <OitavaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}