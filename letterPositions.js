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
