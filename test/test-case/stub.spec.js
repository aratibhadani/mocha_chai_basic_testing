var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
const { describe } = require("mocha");
var Student = require("../../src/controller/studentController");
var studentObj = new Student();

describe("STUB : Get user data", () => {
   it("function arguments check", () => {
    var stub = sinon.stub(studentObj, "getExternal");
    stub.withArgs(40).returns(5)
    expect(studentObj.finalmarks(40)).to.be.equal(54)
  });
});
