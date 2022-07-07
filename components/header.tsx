import Image from "next/image";
import styles from "../styles/Header.module.css";
import logo from "../public/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div>Jungle House</div>
      <Image src={logo} alt="jungle-house-logo" />
    </header>
  );
}

export default Header;
