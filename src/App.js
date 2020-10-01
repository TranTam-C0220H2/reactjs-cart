import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Message from './components/Message';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

function App(props) {
  function showCart() {
    if(props.statusCart) {
      return <Cart/>
    }
  }
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <ProductList/>
        <Message/>
        {showCart()}
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    statusCart : state.statusCart
  }
}

export default connect(mapStateToProps,null)(App);
