// Next
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

// Styles
import styles from './pagination.module.scss';

export default function Pagination() {
  const router = useRouter();

  return (
    <section className={styles.pagination}>
      <div className={styles.pagination__container}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <Link key={n} href={`/${router?.pathname?.split('/')[1]}/${n}`}>
            <button
              style={{
                backgroundColor: Number(router.query?.n) === n ? 'gray' : '',
              }}
            >
              {n}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
