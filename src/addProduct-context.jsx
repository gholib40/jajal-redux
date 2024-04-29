import { createContext, useState } from "react";

export const AddProductContext = createContext({
    addProduct : [],
    addTo : ()=> {}
})

const addProductTo = (addProduct,productAdd) => {
    const exitingProduct = addProduct.find((addProductTo) => addProductTo.id === productAdd.id)

    if(exitingProduct){
        return addProduct.map((product)=> {
            return product.id === productAdd.id ? {...product} : product
        })
    }
    return [...addProduct,{...productAdd}]
}

export const AddProductContextProvider = ({children}) => {
    const [addProduct,setAddProduct] = useState([])
    const addTo = (itemsAdd) => {
        return setAddProduct(addProductTo(addProduct,itemsAdd))
    }

    const value = {addTo,addProduct}
    
    return <AddProductContext.Provider value={value}>{children}</AddProductContext.Provider>
}