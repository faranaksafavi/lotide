assertEqual = require("../assertEqual.js");
tail = require("../tail");
console.log(tail([5, 6, 7]));
assertEqual(tail([5, 6, 7]).length+1, [5, 6, 7].length);
assertEqual(
  tail(["Hello", "Lighthouse", "Labs"]).length+1,
  ["Hello", "Lighthouse", "Labs"].length
);
