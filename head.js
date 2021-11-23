assertEqual = require('./assertEqual.js')
const head = (myList) => myList[0];
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
