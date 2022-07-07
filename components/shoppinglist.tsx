import Plant from "../types/plant";
import styles from "../styles/ShoppingList.module.css";
import CartItem from "../types/cartitem";
import PlantShop from "./plantshop";

type Props = {
  cart: CartItem[];
  updateCart: (items: CartItem[]) => void;
  plants: Plant[];
  setPlants: (items: Plant[]) => void;
};

function ShoppingList({ cart, updateCart, plants, setPlants }: Props) {
  const handleClick = (name: string, price: number) => {
    const plantInCart = cart.find((plant) => plant.name === name);
    if (plantInCart) {
      const cartFiltered = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...cartFiltered,
        { name, price, amount: plantInCart.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div className={styles.shoplist}>
      {plants &&
        plants.map((plant) => (
          <div
            key={plant.id}
            onClick={() => handleClick(plant.name, plant.price)}
          >
            <PlantShop plant={plant} />
          </div>
        ))}
    </div>
  );
}

export default ShoppingList;
