import {Add_Product_Cart, Pay_Cart} from "./Types";


export const addProduct = product => {
    console.log(product)
    return{
        type: Add_Product_Cart,
        payload: {
            product : product
        }
    }
}

export const payCart = () => {
    return{
        type: Pay_Cart,
        payCart: {

        }
    }
}

