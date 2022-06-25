export const hotUpdate = () => {
  // @ts-ignore
  const { hot } = import.meta;
  if (hot) {
    hot.accept(() => {
      console.log('热更新: store');
    });
  }
};
