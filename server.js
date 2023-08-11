var express = require("express");
const route = require("./src/route");
var app = express();

app.use("/", route);

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://localhost", host, port);
});
module.exports = server;
