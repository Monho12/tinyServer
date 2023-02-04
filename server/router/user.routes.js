const express = require("express");
const { loginUser, signupUser } = require("../controller/auth.controller");
const {
  getUser,
  getUsers,
  Verify,
  deleteUser,
} = require("../controller/user.controller");
const { roleMiddleware } = require("../middlewares/roleMiddleware");

const router = express.Router();

router
  .get("/users", roleMiddleware, getUsers)
  .get("/users/:id", roleMiddleware, getUser)
  .get("/verify", Verify)
  .post("/login", loginUser)
  .post("/signup", signupUser)
  .delete("/user/:id", roleMiddleware, deleteUser);

module.exports.userRoutes = router;
