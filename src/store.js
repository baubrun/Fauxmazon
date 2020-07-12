import {
    createStore,
    applyMiddleware,
    compose
} from "redux"
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"

import Cookie from "js-cookie"

const cartItems = Cookie.getJSON("cartItems") || []
const userInfo = Cookie.getJSON("userInfo") || null
const initialState = {cart: cartItems, userSignIn: {userInfo}}


const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;