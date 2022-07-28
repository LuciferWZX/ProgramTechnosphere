import { FC, useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';
import styles from './index.less'
import { StyledEditor } from "@/pages/create/create-article/style";

const CreateArticle:FC = () => {
  const [markdown, setMarkdown] = useState("");
  console.log(markdown);
  return(
    <StyledEditor className={'h-full w-full py-4'}>
      <MarkdownEditor
        className={styles.editorClass}
        visible={true}
        value="# This is a H1  \n## This is a H2  \n###### This is a H6"
        onChange={(value) => setMarkdown(value)}
      />
    </StyledEditor>
  )
}
export default CreateArticle