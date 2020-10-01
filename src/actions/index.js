import * as types_1 from './../constants/ActionTypes';
import * as types_2 from './../constants/Message';


export const productList = () => {
    return {
        type : types_1.PRODUCT_LIST
    }
}

export const closeCart = () => {
    return {
        type : types_1.CLOSE_CART
    }
}

export const openCart = () => {
    return {
        type : types_1.OPEN_CART
    }
}

export const addProductToCart = (product, quantity) => {
    return {
        type : types_1.ADD_PRODUCT_TO_CART,
        product,
        quantity
    }
}

export const minusProductToCart = (product, quantity) => {
    return {
        type : types_1.MINUS_PRODUCT_TO_CART,
        product,
        quantity
    }
}

export const deleteProductToCart = (product) => {
    return {
        type : types_1.DELETE_PRODUCT_TO_CART,
        product
    }
}

export const addProductToCartSuccess = () => {
    return {
        type : types_2.ADD_PRODUCT_TO_CART_SUCCESS
    }
}

export const minusProductToCartSuccess = () => {
    return {
        type : types_2.MINUS_PRODUCT_TO_CART_SUCCESS
    }
}

export const deleteProductToCartSuccess = () => {
    return {
        type : types_2.DELETE_PRODUCT_TO_CART_SUCCESS
    }
}

