import React, { FC, MouseEventHandler } from "react";
import styles from './index.less'
import EmptyImage from '@/assets/svg/empty_article.svg'
interface IProps{
  onClick?:MouseEventHandler<HTMLButtonElement>
  btnText?:React.ReactNode
}
const EmptyArticle:FC<IProps> = (props) => {
  return(
    <div className={styles.emptyBox}>
      <img alt={'empty'} className={styles.emptyImg} src={EmptyImage} />
      <button
        type={"button"}
        onClick={props?.onClick}
        className="btn btn-primary xs:w-5/12 w-full  max-w-2xl">
        {props?.btnText}
      </button>
    </div>
  )
}
export default EmptyArticle