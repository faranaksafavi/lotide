const middle = function(myList) {
  let result = [];
  let len = myList.length;
  if (len % 2 === 0) {
    result.push(myList[len / 2 - 1]);
    result.push(myList[len / 2]);
  } else {
    result.push(myList[Math.floor(len / 2)]);
  }
  return result;
};
module.exports = middle;
