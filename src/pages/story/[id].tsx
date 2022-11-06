// Next
import { GetServerSideProps } from 'next';

// Styles
import styles from './story.module.scss';

interface StoryProps {
  title?: string;
  content?: string;
}

export default function Story(props: { data: StoryProps }) {
  const { data } = props;

  console.log(data);

  return (
    <div className={styles.story}>
      <h1>{data?.title}</h1>
      {data.content && (
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
    const err = response.ok ? false : response.status;

    const data = err === false ? await response.json() : {};

    return { props: { data } };
  } catch {
    return { props: { data: {} } };
  }
};
