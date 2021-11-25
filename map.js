assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
assertEqual(map([2, 3, 8],x=>x*2), [4,6,16],isEqlArray);
assertEqual(map([5, 6 , 3 , 7],x=>x-2), [3 , 4,1,5] ,isEqlArray);
assertEqual(map(["Hello", "Lighthouse", "Labs"],x=>x[0]) , ["H","L","L"],isEqlArray);
