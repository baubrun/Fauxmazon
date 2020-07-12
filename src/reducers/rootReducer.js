import {combineReducers} from "redux"
import { productsReducer, productDetailsReducer} from "./productsReducer"
import cartReducer from "./cartReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userReducer,
})


export default rootReducer