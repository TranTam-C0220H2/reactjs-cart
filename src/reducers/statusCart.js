import * as types from '../constants/ActionTypes';

let initialState = false;
let myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CLOSE_CART:
            state = false
            return state;
        case types.OPEN_CART:
            state = true;
            return state;
        default:
            return state;
    }
}

export default myReducer;