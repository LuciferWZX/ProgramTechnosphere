import { userStore } from '@/stores/userStore';
import { extend, ResponseError } from 'umi-request';
const errorHandler = (error: ResponseError) => {
  // if(error.response){
  //   console.log(error.data);
  // }
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
  const token = userStore.state.user?.token;
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
