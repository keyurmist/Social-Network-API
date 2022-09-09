const { User, Thought } = require("../models");

const thoughtController = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
