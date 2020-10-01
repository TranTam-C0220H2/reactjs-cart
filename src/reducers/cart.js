import * as types from '../constants/ActionTypes';

if (!sessionStorage.getItem('card')) {
    sessionStorage.setItem('card', JSON.stringify([]));
}

let initialState = JSON.parse(sessionStorage.getItem('card'));

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (action.product.id === state[i][0].id) {
                    state[i][1]++;
                    sessionStorage.setItem('card', JSON.stringify(state));
                    return [...state];
                }
            }
            state.push([action.product, action.quantity]);
            sessionStorage.setItem('card', JSON.stringify(state))
            return state;
        case types.MINUS_PRODUCT_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (action.product.id === state[i][0].id) {
                    state[i][1]--;
                    if (state[i][1] === 0) {
                        state.splice(i, 1);
                    }
                    sessionStorage.setItem('card', JSON.stringify(state));
                    return [...state];
                }
            }
        case types.DELETE_PRODUCT_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (action.product.id === state[i][0].id) {
                    state.splice(i, 1);
                    sessionStorage.setItem('card', JSON.stringify(state));
                    return [...state];
                }
            }
        default:
            return [...state];
    }
}

export default myReducer;