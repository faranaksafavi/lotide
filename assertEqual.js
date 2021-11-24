function assertEqual(
  actual,
  expected,
  func = (x, y) => {
    let result;
    x === y ? (result = true) : (result = false);
    return result;
  }
) {
  let msg1 = ["\uF44E", "failed", "!=="];
  let msg2 = ["\uF44C", "passed", "==="];
  let msg;

  if (func(actual ,expected)) {
    msg = [...msg2];
  } else {
    msg = [...msg1];
  }
  console.log(`${msg[0]} Assertion ${msg[1]}: ${actual} ${msg[2]} ${expected}`);
}
module.exports = assertEqual;
