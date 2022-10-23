import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header({ ...props }) {
  return (
    <div {...props}>
      <Link href="/">
        <a className={styles.hover_underline_animation}>About</a>
      </Link>
      <Link href="/contact">
        <a className={styles.hover_underline_animation}>Contact Me</a>
      </Link>
    </div>
  );
}

export default Header;
