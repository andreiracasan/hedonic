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
        <li key={item.title}>
          <span>{index + 1}</span>
          <div className="data">
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
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
