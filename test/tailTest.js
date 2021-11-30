tail = require("../tail");
const assert = require('chai').assert;

describe("#head", () => {
  //1
  it("returns [6,7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7] );
  });
});
