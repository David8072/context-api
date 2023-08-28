import React from 'react';
import { useCart } from './CartContext';

function ProductDetails() {
  const { perItemPrice, perItemQuantity, updateQuantity } = useCart();

  return (
    <div>
    <div className="product-details">
      <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="Product" />
      <p>Product: i Phone 9</p>
      <p>Price: ${perItemPrice}</p>
      <p>Quantity: {perItemQuantity}</p>
      <button onClick={() => updateQuantity(perItemQuantity + 1)}>+</button>
      <button onClick={() => updateQuantity(perItemQuantity - 1)}>-</button>
    </div>
    </div>
    
  );
}


export default ProductDetails;
