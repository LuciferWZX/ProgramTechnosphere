import Header from './Header';
import type { FC } from 'react';
import styles from './index.less';
import ArticleList from "./ArticleList";
const Create: FC = () => {
  return (
    <div className={styles.createContainer}>
      <Header />
      <ArticleList/>
    </div>
  );
};
export default Create;
