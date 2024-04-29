import { useContext } from "react"
import { AddProductContext } from "./addProduct-context"

const ProductComponent = ({data})=> {
    const {id,name,imageUrl} = data
    const {addTo} = useContext(AddProductContext)
    const addHandler = () => addTo(data)
    return (
        <div key={id}>
            <button className="button1" onClick={addHandler}>Salin Data</button>
            <p>{name} {id}</p>
            <img src={imageUrl} />
        </div>
    )
}

export default ProductComponent