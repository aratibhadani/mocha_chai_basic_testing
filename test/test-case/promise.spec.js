var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
const { describe } = require("mocha");
var chaiAsPromised = require("chai-as-promised"); //Use for promise in better way
chai.use(chaiAsPromised);

var Student = require("../../src/controller/studentController");
var studentObj = new Student();

describe("Promise : Get user data", () => {
  //Note : when use normal syntax for function
  it("Simple Way :check value function", function (done) {
    // when you are using promise use done method for complete
    this.timeout(5000); //wait for 5 sec for execution and then after execute this
    studentObj.getDBData().then(function (result) {
      expect(result).to.be.equal(1);
      done();
    });
  });

  //Note : when use arrow function that time not use this.timeout(5000)
  it("chai-as-promised as Promise Way :check value function", async () => {
    // Note : write return when
    return expect(studentObj.getDBData()).to.eventually.equal(1);
  }).timeout(4000);
});

// Note : done use for normal function declaration
