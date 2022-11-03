const chunk = (chunkSize, array) => {
  const outPut = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    outPut.push(array.slice(i, i + chunkSize));
  }
  return outPut;
};
export default chunk;
