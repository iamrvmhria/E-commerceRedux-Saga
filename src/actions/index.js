import { ADD_TO_CART ,EMPTY_CART,REMOVE_CART} from "../constant"

export const addToCart= (product)=>{
    return{
        type: ADD_TO_CART,
        data : product
    }
}
export const removeFromCart= (product)=>{
    return{
        type: REMOVE_CART,
        data : product
    }
}

export const emptyCart= ()=>{
    return{
        type: EMPTY_CART,
    }
}