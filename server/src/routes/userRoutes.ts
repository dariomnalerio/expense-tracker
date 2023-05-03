const {updateUser, createUser, getUser} = require("../controllers/userController")

const express = require("express");
const Router = express.Router();

Router.post("/", createUser)

Router.put("/", updateUser)

Router.get("/", getUser)

export {Router}