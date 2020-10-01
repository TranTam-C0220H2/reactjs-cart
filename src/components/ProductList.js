import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

function ProductList(props) {
    const productList = props.productList.map((product,index) => {
        return <Product 
                    key={index}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    rating={product.rating}
                    description={product.description}
                    price={product.price}
                />
    })
    
  return (
    <div>
      <div className="jumbotron bg-light">
          <h1 className="display-4">Product List</h1>
      </div>
      <div className="container">
          <div className="row">
              {productList}
          </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
    return {
        productList : state.productList
    }
}
export default connect(mapStateToProps,null)(ProductList);