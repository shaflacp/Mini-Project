import React from 'react'
import products from './products.json';
import './ProductList.css';

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
        {products.map((products) => (
            <div key={products.id} className="product">
            <img src={products.image} alt={products.name} />
            <h3>{products.name}</h3>
            <p>{products.description}</p>
            <p>price: ${products.price}</p>
            <button onClick={() => addToCart(products)}>addToCart</button>
            </div>
        ))}
        </div>
        );
}

    
export default ProductList
