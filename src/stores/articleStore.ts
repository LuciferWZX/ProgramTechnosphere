import { defineModel } from 'foca';
export interface Article {
  id:string
}
export interface ArticleStoreState {
  articles: Article[];
}
const initialState: ArticleStoreState = {
  articles: [],
};
export const articleStore = defineModel('article', {
  initialState: initialState,

  effects: {

  },
  actions: {

  }
});
