import { plantList } from "../data/plantList";
import styles from "../styles/ShopSort.module.css";
import Plant from "../types/plant";

function ShopSort({ setPlants }: { setPlants: (items: Plant[]) => void }) {
  const handleChange = (budget: number) => {
    const plantTemp = plantList.filter((plant) => plant.price <= budget);
    setPlants(plantTemp);
  };

  return (
    <div className={styles.sortbar}>
      <label htmlFor="price">Select the maximum price : (0-50$)</label>
      <input
        name="price"
        type="range"
        min="0"
        max="50"
        list="tickmarks"
        onChange={(event) => handleChange(event.target.valueAsNumber)}
      />
      <datalist id="tickmarks">
        <option value="0" label="0$" />
        <option value="10" />
        <option value="20" />
        <option value="30" />
        <option value="40" />
        <option value="50" label="50$" />
      </datalist>
    </div>
  );
}

export default ShopSort;
