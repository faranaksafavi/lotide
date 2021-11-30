assertArraysEqual = require("../assertArraysEqual");
middle = require("../middle");
assertArraysEqual(middle([2, 3, 8]), [3]);
assertArraysEqual(middle([5, 6 , 3 , 7]), [6 , 3]);
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);