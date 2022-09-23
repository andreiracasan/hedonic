// Styles
import styles from './navbar.module.scss';

// Next
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__links}>
        <h1>Hedonic</h1>
        <span>|</span>
        <button onClick={() => router.push('/top/1')}>TOP</button>
        <button onClick={() => router.push('/new/1')}>NEW</button>
      </div>
      <div className={styles.nav__pages}>{/* <h3>about</h3> */}</div>
    </nav>
  );
}
