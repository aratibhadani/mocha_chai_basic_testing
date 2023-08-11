/** Note :
 *  Call backend APIs
 *  help to provide custom responses to HTTP
 *  requests made in our backend application testing
 *
 */
let chaiHttp = require("chai-http");
const server = require("../../server"); // Import server from server.js file
var chai = require("chai");
const { expect } = require("chai");
chai.use(chaiHttp);
describe("Test Backend APIs", () => {
  it("get user list api", function (done) {
    chai
      .request(server)
      .get("/user-list")
      .end((err, response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys("data", "msg");
        done();
      });
  });
});
