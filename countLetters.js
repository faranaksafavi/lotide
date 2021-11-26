assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const countLetters = function (str) {
  let result = {};
  let letterList = [...str];
  let letterSet=new Set([...str]);
  letterSet.forEach(i => {
    let count=0;
    letterList.forEach(x =>x===i ? count+=1 : count+=0 );
    result[i]=count;} );
  return result;
};

assertEqual(
  countLetters("fffr"),
  { f: 3, r: 1 },
  (a, b) => {
    let res = true;
    for (const key in a) {
      if (!(a[key] == b[key])) {
        res = false;
        break;
      }
    }
    return res;
  }
);
