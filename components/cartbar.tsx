import styles from "../styles/CartBar.module.css";
import CartItem from "../types/cartitem";

type Props = {
  cart: CartItem[];
  updateCart: (items: CartItem[]) => void;
  total: number;
};

function CartBar({ cart, updateCart, total }: Props) {
  const emptyCart = () => {
    updateCart([]);
  };

  return (
    <div className={styles.cartbar}>
      {cart.length > 0 ? (
        <div>
          <p>Cart</p>
          <ul>
            {cart.map((item) => (
              <div key={item.name + item.price}>
                {item.name} : {item.amount} x {item.price}$
              </div>
            ))}
          </ul>
          <p>Total = {total}$</p>
          <button onClick={emptyCart}>Empty your cart</button>
        </div>
      ) : (
        <div>Your card is empty</div>
      )}
    </div>
  );
}

export default CartBar;
