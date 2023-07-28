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

  it("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });

  it("should return true even two value equal objects with order of fields are not same", () => {
    expect(deepEqual({name: 'Bob', email: 'bob@example.com'}, {email: 'bob@example.com', name: 'Bob'})).to.equal(true);
  });

  it("should return false even when value is not string/number/boolean", () => {
    expect(deepEqual({name: ['Bob', 'Jack'] }, {name: 'Bob'})).to.equal(false);
  });

  it("should return true given object which filed have value as undfined", () => {
    expect(deepEqual({name: 'Bob', email: undefined}, {name: 'Bob'})).to.equal(true);
  });

  it("should return false given two value not equal objects", () => {
    expect(deepEqual({name: 'Bob', email: 'bob@example.com'}, {name: 'Bob'})).to.equal(false);
  });
});
