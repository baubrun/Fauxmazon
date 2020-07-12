import {combineReducers} from "redux"
import { productsReducer, productDetailsReducer} from "./productsReducer"
import cartReducer from "./cartReducer"
import {signInReducer, registerReducer} from "./userReducer"

const rootReducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: signInReducer,
    userRegister: registerReducer
})


export default rootReducer