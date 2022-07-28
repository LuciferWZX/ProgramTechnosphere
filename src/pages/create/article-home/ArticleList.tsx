import { FC } from "react";
import styles from './index.less'
import { useModel } from "foca";
import { articleStore } from "@/stores/articleStore";
import { EmptyArticle } from "@/components";
import { history } from "@@/core/history";
const ArticleList:FC = () => {
  const { articles } = useModel(articleStore,state => ({
    articles:state.articles
  }))
  const goCreateArticle=()=>{
    history.push('/basic/create/create-article')
  }
  return(
    <div className={styles.articleContainer}>
      {
        articles.length === 0?
          <EmptyArticle
            onClick={goCreateArticle}
            btnText={"写博客"}/>:
          <div>有值</div>
      }
    </div>
  )
}
export default ArticleList