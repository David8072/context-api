import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { totalQuantity, totalAmount } = useCart();

  return (
    <div className="cart">
      <p>Shipping : FREE</p>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
      <button>Buy Now</button>
    </div>
  );
}



  export default Cart