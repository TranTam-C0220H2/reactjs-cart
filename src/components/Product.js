import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

function Product(props) {
  
    function addProductToCart() {
        let product = {
            id: props.id,
            image: props.image,
            title: props.title,
            price: props.price,
        };
        props.addProductToCart(product, 1);
        props.openCart();
        props.addProductToCartSuccess()
    }

    function showStars() {
        let result = [];
        for (let i = 0; i < props.rating; i++) {
            result.push(<i className="fas fa-star mr-1" key={i}></i>);
        }
        for (let i = 0; i < 5 - props.rating; i++) {
            result.push(<i className="far fa-star mr-1" key={i+6}></i>);
        }
        return result;
    };
    return (
        <div className="col-sm-4">
            <div className="card border-0">
                <img className="card-img-top img-product" src={props.image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className=" text-warning">{showStars()}</p>
                    <p className="card-text">{props.description}</p>
                    <hr></hr>
                    <div className="row">
                        <div className="col-sm-6 font-weight-bold">{props.price} VND</div>
                        <div className="col-sm-6">
                            <button onClick={addProductToCart} className="btn btn-default"><i className="fas fa-shopping-cart fa-3x text-primary"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        openCart : () => {
            dispatch(actions.openCart())
        }, 
        addProductToCart: (product, quantity) => {
            dispatch(actions.addProductToCart(product, quantity))
        },
        addProductToCartSuccess: () => {
            dispatch(actions.addProductToCartSuccess())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);


