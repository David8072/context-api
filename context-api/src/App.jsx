import React from 'react';
import { CartProvider } from './CartContext';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function App() {
  return (
    <div>
      <h1>i Phone Product</h1>
    <CartProvider>
      <ProductDetails />
      <Cart />
    </CartProvider>
    </div>
  );
}

export default App;
