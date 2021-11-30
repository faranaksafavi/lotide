assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");
eqObjects = require("./eqObjects.js");

function assertObjectsEqual(
  actual,
  expected,
  func = eqObjects) {
  const inspect = require('util').inspect;
  let msg1 = ["\uF44E", "failed", "!=="];
  let msg2 = ["\uF44C", "passed", "==="];
  let msg;

  if (func(actual ,expected)) {
    msg = [...msg2];
  } else {
    msg = [...msg1];
  }
  console.log(`${msg[0]} Assertion ${msg[1]}: ${inspect(actual)} ${msg[2]} ${inspect(expected)}`);
}
module.exports = assertObjectsEqual;
