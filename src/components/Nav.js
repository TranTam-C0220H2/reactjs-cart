import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a onClick={props.openCart} className="nav-link btn">My Cart ({props.productNumberInCart.length})</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        productNumberInCart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        openCart: () => {
            dispatch(actions.openCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
