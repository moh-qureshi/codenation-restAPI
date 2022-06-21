const { Router } = require("express");
const userRouter = Router();
const { createUser, getAllUsers, getUser, deleteUser, updateEmail, login } = require("./controllers");
const { hashPassword } = require("../middleware")

userRouter.post("/user", hashPassword, createUser);
userRouter.post("/login", login);
userRouter.get("/user", getAllUsers);
userRouter.get("/user/:username", getUser);
userRouter.delete("/user/:username", deleteUser);
userRouter.put("/user/:email", updateEmail);

module.exports = userRouter;