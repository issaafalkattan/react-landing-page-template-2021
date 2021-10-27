export const chunkArr = <T>(arr: Array<T>, chunkSize: number) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunked.push(arr.slice(i, i + chunkSize));
  }
  return chunked;
};
