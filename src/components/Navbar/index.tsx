// Styles
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__links}>
        <h1>Hedonic for HN</h1>
        {/* <span>|</span>
        <h3>top</h3>
        <h3>new</h3> */}
      </div>

      <div className={styles.nav__pages}>{/* <h3>about</h3> */}</div>
    </nav>
  );
}
