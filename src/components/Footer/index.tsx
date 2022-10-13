// Styles
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© Hacker News {new Date().getFullYear()}</span>
    </footer>
  );
}
