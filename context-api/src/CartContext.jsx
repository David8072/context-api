import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [perItemPrice, setPerItemPrice] = useState(549);
  const [perItemQuantity, setPerItemQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(perItemPrice);
  

  const updateQuantity = (newQuantity) => {
    setPerItemQuantity(newQuantity);
    const newTotalQuantity = totalQuantity + (newQuantity - perItemQuantity);
    setTotalQuantity(newTotalQuantity);
    const newTotalAmount = newTotalQuantity * perItemPrice;
    setTotalAmount(newTotalAmount);
  };

  const contextValue = {
    perItemPrice,
    perItemQuantity,
    totalQuantity,
    totalAmount,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
