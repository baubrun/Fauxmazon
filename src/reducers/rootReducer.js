import {combineReducers} from "redux"
import { productsReducer, productDetailsReducer} from "./productsReducer"
import cartReducer from "./cartReducer"


const rootReducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})


export default rootReducer