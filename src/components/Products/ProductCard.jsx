import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ product, itemQuantity, handleProductClick, addToCart }) => (
    <div className="col-md-4 col-lg-3 col-6">
      <div className="card">
        <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
          <img
            src={product.imgdata}
            className="card-img-top"
            title={product.rname}
          />
        </Link>
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
            <div>
              <p className="card-title">{product.rname}</p>
              <p className="card-text mb-2">{product.price.toFixed(2)}$</p>
            </div>
          </Link>
          <button className="cart-button-primary btn-effect" onClick={() => addToCart(product)}>
            <span className="fa fa-shopping-cart me-2" />
            ADD TO CART {itemQuantity > 0 ? `(${itemQuantity})` : ''}
          </button>
        </div>
      </div>
    </div>
  );

  export default ProductCard