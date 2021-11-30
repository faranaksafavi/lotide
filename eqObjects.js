assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const eqObjects = function (obj1, obj2) {
  let res = true;
  for (const key in obj1) {
    if (Object.entries(obj1).length == Object.entries(obj2).length) {
      if (!(obj1[key] == obj2[key])) {
        res = false;
        break;
      }
    } else {
      res = false;
      break;
    }
  }
  return res;
};
module.exports = eqObjects;