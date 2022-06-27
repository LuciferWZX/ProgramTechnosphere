import { useInterval } from 'ahooks';
import dayjs from 'dayjs';
import { useState } from 'react';
interface TimerConfig {
  format?: string; //日期显示的格式
  frequency?: number; //日期更新的频率
}
export const useTimer = (config?: TimerConfig) => {
  const format = config?.format ?? 'YYYY-MM-DD HH:mm:ss';
  const frequency = config?.frequency ?? 1000;
  const [currentTime, setCurrentTime] = useState<string>(
    dayjs().format(format),
  );
  useInterval(() => {
    setCurrentTime(dayjs().format(format));
  }, frequency);

  return {
    time: currentTime,
  };
};
