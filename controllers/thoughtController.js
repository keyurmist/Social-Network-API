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

  //get single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  //create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log("An error has occurred:", err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
