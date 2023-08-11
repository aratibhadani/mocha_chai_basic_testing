var express = require("express");
const { login, userList } = require("../controller/authController");
var route = express();

route.post("/login", login);
route.get("/user-list", userList);

module.exports = route;
