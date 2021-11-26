assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const findKey = function (obj, callback) {
  let result;
  let keysValueS = Object.entries(obj);
  for (const keyValue of keysValueS) {
    if (callback(keyValue[1])) {
      result = keyValue[0];
      break;
    }
  }
  return result;
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma",
  (a, b) => a === b
);
