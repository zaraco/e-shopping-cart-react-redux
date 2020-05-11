import {Add_Product_Cart, Pay_Cart, Search_Products} from "./Types";


export const addProduct = product => {
    return {
        type: Add_Product_Cart,
        payload: {
            product: product
        }
    }
}

export const payCart = () => {
    return {
        type: Pay_Cart,
        payCart: {}
    }
}


export const searchProducts = search => {
    return {
        type: Search_Products,
        payload: {
            search: search
        }
    }
}


