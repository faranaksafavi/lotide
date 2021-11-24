const isEqlArray = (a, b) => {
  let res = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      res = false;
      break;
    }
  }
  return res;
};
module.exports = isEqlArray;