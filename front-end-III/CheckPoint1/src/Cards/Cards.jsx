import { Card } from "./Card/Card"

export function Cards(props) {
    return (
        <div>
            {
                props.cores.map((cor, i) => {
                    return (
                        <Card key={i} corData={cor} />
                    )
                })
            }
        </div>
    )
}
