var sinon = require("sinon");
var chai = require("chai");

const { describe, before } = require("mocha");

describe(">>>> Heading 1", () => {
  before("---first", () => {
    console.log(">>>>>> Run first");
  });
  after("---last", () => {
    console.log(">>>>>> Run last");
  });
  it("test code 1", () => {
    console.log("test case");
  });
  it.skip("test code 2", () => {
    console.log("test case");
  });
  it("test code 3", () => {
    console.log("test case");
  });
});
