import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";


const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  //addToCart
  const addToCart = (id, img, title, size, price) => {
    setItems((prevState) => [
      ...prevState,
      { id, img, title, size, price, qty: 1 },
    ]);
    toast.success("Added to cart!");
  };

  //removeFromCart
  const removeFromCart = (id) => {
    setItems((prevState) => [...prevState].filter((item) => item.id !== id));
    toast.error("Removed from cart!");
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
