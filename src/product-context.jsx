import { createContext, useState } from "react";
import PRODUCT from './shop-data.json'


export const ProductContext = createContext({
    dataProduct : [],
    setDataProduct : () => {} 
})

export const ProductContextProvider = ({children}) => {
    const [dataProduct,setDataProduct] = useState(PRODUCT)
    const value = {dataProduct}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}