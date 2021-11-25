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
assertEqual(
  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], (x) => x < 0),
  [1, 2, 5, 7, 2],
  isEqlArray
);
assertEqual(
  takeUntil(
    ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"],
    (x) => x === ","
  ),
  ["I've", "been", "to", "Hollywood"],
  isEqlArray
);
