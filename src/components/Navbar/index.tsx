// Styles
import styles from './navbar.module.scss';

// Next
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__links}>
        <Link href="/">
          <a className={styles.nav__links_home}>
            <h1>Hedonic</h1>
          </a>
        </Link>
        <span>|</span>
        <Link href="/top/1">
          <a>Top</a>
        </Link>
        <Link href="/new/1">
          <a>New</a>
        </Link>
        <Link href="/show/1">
          <a>Show</a>
        </Link>
        <Link href="/ask/1">
          <a>Ask</a>
        </Link>
      </div>
      <div className={styles.nav__pages}>{/* <h3>about</h3> */}</div>
    </nav>
  );
}
