import axios from "axios"
import {
    url
} from "../utils"
import {
    ADD_TO_CART,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART
} from "./types"
import Cookie from "js-cookie"


const addToCartAction = (prodID, qty) => {
    return (dispatch, getState) => {
        axios.get(url + prodID).then(res => {
            const {
                data
            } = res
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    product: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    inStock: data.inStock,
                    qty
                }

            })
        }).catch(err => {
            dispatch({
                type: ADD_TO_CART_FAIL,
                error: err.message
            })
        })

        const {
            cart: cartItems
        } = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    }
}


const removeFromCartAction = (prodID) => {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: prodID
        })

        const {
            cart: cartItems
        } = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))

    }
}




export {
    addToCartAction,
    removeFromCartAction
}