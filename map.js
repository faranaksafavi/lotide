assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
