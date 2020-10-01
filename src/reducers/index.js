import { combineReducers } from 'redux';
import productList from './products';
import statusCart from './statusCart';
import cart from './cart';
import message from './message';

const myReducer = combineReducers({
    productList : productList,
    statusCart : statusCart,
    cart: cart,
    message: message
});
export default myReducer;