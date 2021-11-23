assertEqual = require("./assertEqual.js");
const tail = (myList) => [...myList].shift();
assertEqual(tail([5, 6, 7]).length, [5, 6, 7].length);
assertEqual(
  tail(["Hello", "Lighthouse", "Labs"]).length,
  ["Hello", "Lighthouse", "Labs"].length
);
module.exports = tail;
