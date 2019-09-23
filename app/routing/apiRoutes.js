let friendsArray = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
};
