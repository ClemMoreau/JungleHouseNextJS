import Plant from "../types/plant";
import Image from "next/image";
import water from "../public/water.svg";
import sun from "../public/sun.svg";
import styles from "../styles/PlantShop.module.css";

function PlantShop({ plant }: { plant: Plant }) {
  const range = [1, 2, 3];

  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Image
          className={styles.imgplant}
          src={plant.cover.src}
          alt="plant"
          width="150px"
          height="150px"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{plant.name}</div>
        <div className={styles.info2}>
          <div className={styles.health}>
            <div>
              {range.map((rangeElement) =>
                rangeElement <= plant.water ? (
                  <span key={rangeElement.toString()}>
                    <Image
                      src={water}
                      alt="water"
                      className={styles.logo}
                      width="20px"
                      height="20px"
                    />
                  </span>
                ) : null
              )}
            </div>
            <div>
              {range.map((rangeElement) =>
                rangeElement <= plant.light ? (
                  <span key={rangeElement.toString()}>
                    <Image
                      src={sun}
                      alt="sun"
                      className={styles.logo}
                      width="20px"
                      height="20px"
                    />
                  </span>
                ) : null
              )}
            </div>
          </div>
          <div className={styles.price}>{plant.price} $</div>
        </div>
      </div>
    </div>
  );
}

export default PlantShop;
