// Styles
import styles from './list.module.scss';

// Components
import Pagination from '../Pagination';

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

export default function List(props: PageProps) {
  const { data } = props;

  return (
    <>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li key={item.id}>
            <div className={styles.list__number}>
              <span>{index + 1}</span>
            </div>
            <div className={styles.list__data}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <div className={styles.list__info}>
                {item.points && (
                  <div className={styles.list__info_label}>
                    <svg viewBox="0 0 12 17">
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L7.5 2.71V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    <span>{item.points}</span>
                  </div>
                )}
                {item.domain && (
                  <div className={styles.list__info_label}>
                    <svg viewBox="0 0 16 16">
                      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                    </svg>
                    <span>{item.domain}</span>
                  </div>
                )}
                {item.time_ago && (
                  <div className={styles.list__info_label}>
                    <svg viewBox="0 0 18 18">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .25.43l3.5 2a.5.5 0 0 0 .5-.86L8 8.7V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                    <span>{item.time_ago}</span>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination />
    </>
  );
}
