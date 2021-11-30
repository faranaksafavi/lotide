assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback) {
      results.push(callback(item));
    } else {
      break;
    }
  }
  return results;
};
