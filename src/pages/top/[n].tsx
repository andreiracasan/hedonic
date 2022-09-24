// Next
import { GetServerSideProps } from 'next';

// Components
import List from '../../components/List';

export default function Top(props: { data: [] }) {
  const { data } = props;

  return <List data={data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { n } = context.query;

  const response = await fetch(`https://api.hnpwa.com/v0/news/${n}.json`);
  const err = response.ok ? false : response.status;

  const data = err === false ? await response.json() : [];

  return {
    props: {
      data,
    },
  };
};
