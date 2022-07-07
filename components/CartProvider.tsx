import { createContext } from "react";
import CartItem from "../types/cartitem";

interface ICartContext {
  card: CartItem[];
  updateCard?: (items: CartItem[]) => void;
}

export const defaultValue = {
  card: [],
};

const CartContext = createContext<ICartContext>(defaultValue);
export const CartProvider = CartContext.Provider;

export default CartContext;
