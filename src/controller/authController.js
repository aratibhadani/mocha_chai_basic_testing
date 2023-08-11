module.exports = {
  login: (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send("Hello GET");
  },

  userList: (req, res) => {
    const user = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
      { id: 4, name: "d" },
    ];
    return res.status(200).send({ data: user, msg: "get data" });
  },
};
