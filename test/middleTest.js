middle = require("../middle");
const assert = require('chai').assert;

describe("#head", () => {
  //1
  it("returns [3] for [2, 3, 8]", () => {
    assert.deepEqual(middle([2, 3, 8]), [3] );
  });
});
