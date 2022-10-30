// Next
import { GetServerSideProps } from 'next';

// Components
import List from '../../components/List';

export default function New(props: { data: [] }) {
  const { data } = props;

  return data.length === 0 ? (
    <h1 className="global__error">
      Sorry, something went wrong! Please try again later.
    </h1>
  ) : (
    <List data={data} />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { n } = context.query;

  try {
    const response = await fetch(`https://api.hnpwa.com/v0/newest/${n}.json`);
    const err = response.ok ? false : response.status;

    const data = err === false ? await response.json() : [];

    return { props: { data } };
  } catch {
    return { props: { data: [] } };
  }
};
