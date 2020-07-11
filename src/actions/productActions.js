import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCTS_REQUEST,
    PRODUCTS_REQUEST_SUCCESS,
    PRODUCTS_REQUEST_FAIL
} from "./types";
import axios from "axios";
import {url} from "../utils"





const getProductsAction = () => {
    return dispatch => {
        dispatch({
            type: PRODUCTS_REQUEST
        });

        axios.get(url)
        .then(res => {
            dispatch({
                type: PRODUCTS_REQUEST_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: PRODUCTS_REQUEST_FAIL,
                payload: err.message
            })
        })
    }

};

const getProductDetailsAction = (prodID) => {
    return dispatch => {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        axios.get(url + prodID).then(res => {
            dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: res.data})
        }).catch(err => {
            dispatch({type: PRODUCT_DETAILS_FAIL, error: err.message})
        })
    }
}

export {
    getProductsAction,
    getProductDetailsAction
}

