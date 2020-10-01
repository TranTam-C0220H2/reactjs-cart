import * as types from '../constants/Message';

let initialState = '';
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART_SUCCESS:
            state = types.ADD_PRODUCT_TO_CART_SUCCESS
            return state;
        case types.MINUS_PRODUCT_TO_CART_SUCCESS:
            state = types.MINUS_PRODUCT_TO_CART_SUCCESS
            return state;
        case types.DELETE_PRODUCT_TO_CART_SUCCESS:
            state = types.DELETE_PRODUCT_TO_CART_SUCCESS;
            return state;
        default:
            return state;
    }
}

export default myReducer;