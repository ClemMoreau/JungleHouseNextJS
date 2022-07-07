import { useState, useEffect } from "react";
import { NextPage } from "next";
import PlantCart from "../components/plantcart";
import { plantList } from "../data/plantList";
import CartItem from "../types/cartitem";
import Plant from "../types/plant";

const Cart: NextPage = () => {
  const savedCart = sessionStorage.getItem("cart");

  const [cart, updateCart] = useState<CartItem[]>(
    savedCart ? JSON.parse(savedCart) : []
  );
  /*useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    updateCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);*/

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce(
    (prevTotal, item) => prevTotal + item.amount * item.price,
    0
  );

  return (
    <div className="cart">
      {cart.map((item) => (
        <PlantCart
          key={item.name}
          plant={plantList.find((plant) => plant.name === item.name) as Plant}
          cart={cart}
          updateCart={updateCart}
        />
      ))}
      <div className="total">
        Total : {total} $<button>Submit your order</button>
        <button onClick={() => updateCart([])}>Empty your cart</button>
      </div>
    </div>
  );
};

export default Cart;
