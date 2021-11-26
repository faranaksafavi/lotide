assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

function middle(myList) {
  let result = [];
  let len = myList.length;
  if (len % 2 === 0) {
    result.push(myList[len / 2 - 1]);
    result.push(myList[len / 2]);
  } else {
    result.push(myList[Math.floor(len / 2)]);
  }
  return result;
}

assertEqual(middle([2, 3, 8]), [3],isEqlArray);
assertEqual(middle([5, 6 , 3 , 7]), [6 , 3] ,isEqlArray);
assertEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"],isEqlArray);
