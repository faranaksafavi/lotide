  function assertEqual(actual, expected) {
  let msg1 = ["\uF44E", "failed", "!=="];
  let msg2 = ["\uF44C", "passed", "==="];
  let msg;
  if (actual === expected) {
    msg = [...msg2];
  } else {
    msg = [...msg1];
  }
  console.log(`${msg[0]} Assertion ${msg[1]}: ${actual} ${msg[2]} ${expected}`);
}
module.exports= assertEqual;
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
