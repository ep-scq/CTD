import './style.scss'

export function OitavaAulaCardProduto(props) {

    return (

        <div className="oitava-aula-card-produto-component">
            <img src={props.productData.picture} />
            <div className="card-body">
                <h1>{props.productData.name}</h1>
                <span>R$ {props.productData.price},00</span>
            </div>
        </div>

    )

}