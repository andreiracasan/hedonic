// Styles
import styles from './top.module.scss';

// Next
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface Item {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago?: string;
  type?: string;
  url: string;
  domain: string;
  comments_count: number;
}

interface PageProps {
  data: Item[];
}

const Top = (props: PageProps) => {
  const router = useRouter();
  const { n } = router.query;
  const { data } = props;

  return (
    <ul className={styles.list}>
      {data.map((item, index) => (
        <li key={item.id}>
          <div className={styles.top__number}>
            <span>{index + 1}</span>
          </div>
          <div className={styles.top__data}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title} {item.points && <span>({item.points} points)</span>}
            </a>
            <p>
              Posted by <u>{item.user}</u> from <u>{item.domain}</u>{' '}
              {item.time_ago}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { n } = context.query;

  const response = await fetch(`https://api.hnpwa.com/v0/news/${n}.json`);
  const err = response.ok ? false : response.status;

  const data = err === false ? await response.json() : [];

  return {
    props: {
      err,
      data,
    },
  };
};

export default Top;
