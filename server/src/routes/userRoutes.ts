const {
  createUserController,
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userController");
import { verifyJwt } from "../../middleware";

const express = require("express");
const Router = express.Router();

Router.post("/", createUserController);

Router.get("/", getUsersController);

Router.get("/:uid", getUserController);

Router.put("/", updateUserController);

Router.delete("/:uid", deleteUserController);

export { Router };
