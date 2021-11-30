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
