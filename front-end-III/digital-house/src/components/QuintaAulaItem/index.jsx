export function QuintaAulaItem(props) {

    console.log(props)

    return (

        <li>
            <h2>{props.item.title}</h2>
            <p>{props.item.text}</p>
            <img src={props.item.image} alt="" />
        </li>
    )

}