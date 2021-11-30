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
