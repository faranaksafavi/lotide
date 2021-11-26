assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const countLetters = function (str) {
  let result = {};
  let letterList = [...str];
  let letterSet = new Set([...str]);
  letterSet.forEach((i) => {
    let count = 0;
    let indexes = [];
    letterList.forEach((x) => {
      if (x === i) {
        indexes.push(count);
      }
      count += 1;
    });
    result[i] = indexes;
  });
  return result;
};

assertEqual(countLetters("fffr"), { f: [0, 1, 2], r: [3] }, (a, b) => {
  let res = true;
  for (const key in a) {
    if (!isEqlArray(a[key], b[key])) {
      res = false;
      break;
    }
  }
  return res;
});
