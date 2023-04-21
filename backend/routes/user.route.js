const express = require("express");
const {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} = require("../controller/user.controller");
const { verifyToken } = require("../verifyToken");

const userRoutes = express.Router();

//update user
userRoutes.put("/:id", verifyToken, update);

//delete user
userRoutes.delete("/:id", verifyToken, deleteUser);

//get a user
userRoutes.get("/find/:id", getUser);

//subscribe a user
userRoutes.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
userRoutes.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
userRoutes.put("/like/:videoId", verifyToken, like);

//dislike a video
userRoutes.put("/dislike/:videoId", verifyToken, dislike);

module.exports = {
  userRoutes,
};
