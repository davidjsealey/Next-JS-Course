import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
