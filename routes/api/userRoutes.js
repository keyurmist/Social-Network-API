const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

// http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// http://localhost:3001/api/users/:id
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// http://localhost:3001/api/users/:id/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
