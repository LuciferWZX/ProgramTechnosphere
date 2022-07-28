import { StoreKey } from '@/constants/enum';
import { userStore } from '@/stores/userStore';
import store from 'storejs';
import { extend, ResponseError } from 'umi-request';
const statusMap:any = {
  "504":"服务器出错"
}
const errorHandler = (error: ResponseError) => {
  // if(error.response){
  //   console.log(error.data);
  // }
  switch (error.response.status){
    case 504:{
      return {
        code:504,
        data:null,
        msg:statusMap[504]
      }
    }
  }
  if (error.data) {
    return error.data;
  }
};
const request = extend({
  prefix:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000/api'
      : '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  errorHandler: errorHandler,
});
request.interceptors.request.use((url, options) => {
  const headers = options.headers as { [key: string]: any };
  const token = userStore.state.user?.token ?? store.get(StoreKey.Token);
  if (token && headers) {
    headers.authorization = token;
  }
  return {
    url,
    options: {
      ...options,
      headers,
    },
  };
});
export default request;
