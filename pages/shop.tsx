import { useContext, useEffect, useState } from "react";
import { plantList } from "../data/plantList";
import Plant from "../types/plant";
import CartItem from "../types/cartitem";
import styles from "../styles/Shop.module.css";
import ShoppingList from "../components/shoppinglist";
import ShopSort from "../components/shopsort";
import CartBar from "../components/cartbar";
import { NextPage } from "next";
import CartContext from "../components/CartProvider";

const Shop: NextPage = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  //const [cart, updateCart] = useState<CartItem[]>([]);

  const cart = useContext(CartContext);

  const total = cart.reduce(
    (prevTotal, item) => prevTotal + item.amount * item.price,
    0
  );

  useEffect(() => {
    setPlants(plantList);
    const savedCart = sessionStorage.getItem("cart");
    updateCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className={styles.shop}>
      <ShopSort setPlants={setPlants} />
      <ShoppingList
        cart={cart}
        updateCart={updateCart}
        plants={plants}
        setPlants={setPlants}
      />
      <CartBar cart={cart} updateCart={updateCart} total={total} />
    </div>
  );
};

export default Shop;
