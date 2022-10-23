// Next
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Styles
import styles from './pagination.module.scss';

export default function Pagination() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname, ', ', router.query?.n);
  }, [router]);

  return (
    <section className={styles.pagination}>
      <div>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
    </section>
  );
}
