import React, { createContext } from "react";
import Header from "./header";
import NavBar from "./navbar";
import { useState, useEffect } from "react";
import CartItem from "../types/cartitem";
import CartContext, { CartProvider, defaultValue } from "./CartProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const [cart, updateCart] = useState(defaultValue.card);

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    updateCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <CartContext.Provider value={{ cart, updateCart }}>
        <Header />
        <NavBar />
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default Layout;
