export const swapElements = (arr, index1, index2) => {
  console.log({ index1, index2 });
  let data = [...arr];
  [data[index1], data[index2]] = [data[index2], data[index1]];
  return data;
};
