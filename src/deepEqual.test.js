const { expect } = require("chai");
const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it("should return true given null, null", () => {
    expect(deepEqual(null, null)).to.equal(true);
  });

  it("should return false given null, {}", () => {
    expect(deepEqual(null, {})).to.equal(false);
  });

  it.skip("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });

});
