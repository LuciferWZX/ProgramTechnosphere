import { defineModel } from 'foca';
export interface UserStoreState {
  user: null;
}
const initialState: UserStoreState = {
  user: null,
};
export const userStore = defineModel('user', {
  initialState: initialState,
  persist: {
    version: 1,
  },
});
