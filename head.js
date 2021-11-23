myAssert = require('./assertEqual.js')
const head = (myList) => myList[0];
myAssert(head([5, 6, 7]), 5);
myAssert(head(["Hello", "Lighthouse", "Labs"]), "Hello");
