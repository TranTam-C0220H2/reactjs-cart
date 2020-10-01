import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

function Cart(props) {
    const renderCart = props.cart.map((value, index) => {
        return (
            <tr key={index}>
                <td><img style={{ width: 100 }} className="card-img-top img-product" src={value[0].image} alt="" />
                </td>
                <td>{value[0].title}</td>
                <td>{value[0].price}</td>
                <td><i onClick={() => {props.minusProductToCart(value[0],1);props.minusProductToCartSuccess()}} className="fas fa-minus btn"></i> {value[1]} <i onClick={()=>{props.addProductToCart(value[0],1); props.addProductToCartSuccess()}} className="fas fa-plus btn"></i></td>
                <td>{value[0].price * value[1]}</td>
                <td>
                    <button onClick={() => {props.deleteProductToCart(value[0]);props.deleteProductToCartSuccess()}} className="btn btn-secondary">Delete</button>
                </td>
            </tr>
        )
    })
    function totalMoney() {
        let totalMoney = 0;
        for (let i = 0; i < props.cart.length; i++) {
            totalMoney += props.cart[i][0].price * props.cart[i][1];
        }
        return totalMoney;
    }

    return (
        <div className="mt-4">
            <div className="row">
                <div className="col-sm-12">
                    <i onClick={props.closeCart} className="fas btn fa-times-circle fa-2x float-right"></i>
                    <h2>Your Cart</h2>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderCart}
                    <tr>
                        <td colSpan="3"><button className="btn btn-primary">Mua hàng</button></td>
                        <td className="font-weight-bold">Total money</td>
                        <td>{totalMoney()}</td>
                        <td><i className="fas fa-dollar-sign"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        closeCart: () => {
            dispatch(actions.closeCart())
        },
        addProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity))
        },
        minusProductToCart: (product, quantity) => {
            dispatch(actions.minusProductToCart(product, quantity))
        },
        deleteProductToCart: (product) => {
            dispatch(actions.deleteProductToCart(product))
        },
        addProductToCartSuccess: () => {
            dispatch(actions.addProductToCartSuccess())
        },
        minusProductToCartSuccess: () => {
            dispatch(actions.minusProductToCartSuccess())
        },
        deleteProductToCartSuccess: () => {
            dispatch(actions.deleteProductToCartSuccess())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
