/** Note :
 *  help to provide custom responses to HTTP
 *  requests made in our application for testing
 *
 *  test custom response
 */

var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
const { describe } = require("mocha");
var chaiAsPromised = require("chai-as-promised"); //Use for promise in better way
chai.use(chaiAsPromised);

var Student = require("../../src/controller/studentController");
const nock = require("nock");
var studentObj = new Student();

describe("Nocks : test case", () => {
  it("using Nock test api", function (done) {
    const obj = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/todos/1")
      .reply(200, obj);
    studentObj.getDummyEmpData().then(function (record) {
      expect(record).to.be.eql(obj);
      done();
    });
  });
});
