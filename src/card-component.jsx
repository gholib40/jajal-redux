import CardSalin from "./cardSalin.component"
import { AddProductContext } from "./addProduct-context"
import { useContext } from "react"

const CardComponent = ()=> {
    const {addProduct} = useContext(AddProductContext)
    return (
        <div className="content2">
            {addProduct.map((data)=> {
                return <CardSalin data={data} />
            })}
        </div>
    )
}

export default CardComponent