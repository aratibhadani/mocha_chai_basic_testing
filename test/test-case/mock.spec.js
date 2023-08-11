var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
const { describe } = require("mocha");
var Student = require("../../src/controller/studentController");
var studentObj = new Student();

describe("MOCK : ", () => {
  it("count function", () => {
    var mock = sinon.mock(studentObj);

    var expt = mock.expects("getExternal");
    expt.exactly(1);
    expt.withArgs(40);
    studentObj.finalmarks(40);
    mock.verify();
  });
});
