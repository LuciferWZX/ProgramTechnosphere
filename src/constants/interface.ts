import type { ResultCode } from '@/constants/enum';

export interface ResType<T> {
  code: ResultCode;
  msg: string;
  data: T;
}
