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
export default request;
