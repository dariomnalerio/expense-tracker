const {updateUser, createUser} = require("../controllers/userController")

const express = require("express");
const Router = express.Router();

Router.post("/", createUser)

Router.put("/", updateUser)

export {Router}