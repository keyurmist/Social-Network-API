const { User, Thought } = require("../models");

const userController = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
