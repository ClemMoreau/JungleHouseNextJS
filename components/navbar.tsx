import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function NavBar() {
    
    return ( 
        <nav className={styles.navbar}>
            <ul className={styles.navlink}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/shop"><a>Shop</a></Link></li>
                <li><Link href="/cart"><a>Cart</a></Link></li>
            </ul>
            <ul className={styles.navlink}>
                <li><a href="http://facebook.com">Facebook</a></li>
                <li><a href="http://twitter.com">Twitter</a></li>
            </ul>
        </nav>
     );
}

export default NavBar;