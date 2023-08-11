var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
const { describe } = require("mocha");
var Student = require("../../src/controller/studentController");
var studentObj = new Student();

describe("SPY : Get user data", () => {
  it("check userID", () => {
    expect(studentObj.getuserId()).to.be.equal(12);
  });

  it("get function call count", () => {
    var spyObj = sinon.spy(studentObj, "getInfo");
    studentObj.home(5); //Check this method how many times call getInfo method
    expect(spyObj.calledOnce).to.be.true; //Get 1 and test cases pass If many than failed test cases
  });

  it("function arguments check", () => {
    var spyObj = sinon.spy(studentObj, "getInfo2");
    studentObj.home2(5); //Check this method how many times call getInfo method
    expect(spyObj.calledWith(5,1)).to.be.true; //Get 1 and test cases pass If many than failed test cases
  });
});
