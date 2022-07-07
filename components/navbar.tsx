import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import CartItem from "../types/cartitem";

function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navlink}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.navlink}>
          <li>
            <a href="http://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="http://twitter.com">Twitter</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
